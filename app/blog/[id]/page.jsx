import { Button } from '@/components/ui/button'
import { urlFor } from '@/lib/urlFor'
import { client } from '@/sanity/lib/client'
import { PLAYLIST_BY_SLUG_QUERY, POST_BY_ID_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }) => {

    const id = (await params).id

    // const post = await client.fetch(POST_BY_ID_QUERY, { id })


    const [post, playlist] = await Promise.all([
        client.fetch(POST_BY_ID_QUERY, { id }),
        client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: "top-picks" }),
    ]);

    if (!post) return notFound()

    const topPicks = playlist?.select || [];


    // Array img
    const components = {
        types: {
            image: ({ value }) => {
                return (
                    <>

                        <div className="relative -z-20 w-full h-72 ">

                            <Image
                                src={urlFor(value).url()}
                                alt={value.alt || ' '}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className='mt-10'>
                            {value.caption && (
                                <div className="text-center text-gray-600 mt-2">
                                    {value.caption}
                                </div>
                            )}
                        </div>
                    </>
                )
            }
        }
    }




    return (
        <>
            <div className='mt-20'>

                {/* blog header */}
                <div className='w-[80%] sm:w-[40%] mx-auto m-10  '>

                    <Link href={`/author/${post.author._id}`}>
                        <div className='flex items-center gap-3'>
                            {/* author image */}
                            <Image
                                src={urlFor(post.author.image).url()}
                                width={40}
                                height={40}
                                alt="author"
                                className=' rounded-full object-cover'
                            />
                            <div>
                                <p className='font-bold text-md'>By {post.author.name}</p>
                                <p className='text-sm'>Posted on <span>{new Date(post.date).toLocaleDateString()}</span></p>
                            </div>
                        </div>
                    </Link>

                    {/* Title */}
                    <h1 className='mt-5 text-2xl font-bold'>{post.title}</h1>
                    {/* category */}
                    <p className='mt-5 font-bold'>{post.category}</p>

                </div>

                {/* header image */}
                {/* <div className='w-[90%] mx-auto'>
                    <Image
                        src={urlFor(post.image).url()}
                        alt={post.title || 'Blog post image'}
                        width={800}
                        height={500}
                        className='mx-auto '

                    />
                </div> */}


                {/* Article text */}
                <div className='break-words px-6 md:px-4 prose max-w-3xl mx-auto mt-10'>

                    {Array.isArray(post.body) &&

                        <PortableText
                            value={post.body}
                            components={components}
                        />
                    }

                </div>


                {/* Top Picks */}
                <h1 className='w-[90%] mx-auto font-bold text-xl mt-10 mb-5' >Top Picks</h1>

                <hr className='mb-5 w-[90%] mx-auto' />


                <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 w-[80%] mx-auto'>
                    {topPicks.map((topPick) => (

                        <div key={topPick._id}>
                            <Image
                                src={urlFor(topPick.image).url()}
                                alt={topPick.title || 'Blog post image'}
                                width={800}
                                height={400}
                                className='object-cover w-full h-[300px]'  // Fixed height with cover
                            />

                            <div className='border rounded-md p-3'>
                                {/* category */}
                                <Link href={`/blog/${topPick._id}`}>
                                    <h2 className='font-semibold'>{topPick.category}</h2>
                                    <h1 className='font-bold text-2xl my-3'>{topPick.title}</h1>
                                </Link>

                                <Link href={`/author/${topPick.author._id}`}>
                                    <p className='my-2'>By {topPick.author.name} | {new Date(topPick.date).toLocaleDateString()}</p>
                                </Link>

                                <Link href={`/blog/${topPick._id}`}>
                                    <p>
                                        {topPick.description}
                                    </p>
                                </Link>
                            </div>
                        </div>


                    ))}

                </section>



                <section className='text-center my-10  mx-auto w-[80%] md:w-[25%]'>
                    <h1 className='font-bold text-xl'>Join our team to be a part of our story</h1>
                    <p>We'd love to hear from you! Reach out with your questions, suggestions, or collaboration ideas.</p>
                    <Link href='/contact'>
                        <Button className=' px-[48px] py-[20px] mt-5 text-black font-serif font-semibold hover:bg-[#d8bd71] bg-[#f5d271]'>join</Button >
                    </Link>
                </section>
            </div>
        </>
    )
}

export default page







