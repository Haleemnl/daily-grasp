import { urlFor } from '@/lib/urlFor'
import { client } from '@/sanity/lib/client'
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries'
import { GithubIcon, Instagram, Linkedin, LinkedinIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }) => {

    const id = (await params).id

    const author = await client.fetch(AUTHOR_BY_ID_QUERY, { id })

    if (!author) return notFound()

    return (
        <>



            <div className='flex flex-col md:flex-row items-center gap-5 bg-[#F4F0F8] py-20 px-20'>
                <img
                    src={urlFor(author.image).url()}
                    alt={author.name || "Author image"}
                    className="w-52 h-52 object-cover rounded-full"
                />

                <div className=' w-[]'>
                    <h1 className='font-bold text-2xl text-center my-3'>Hey there, i'm {author.name} and welcome to my blog</h1>

                    <p className='text-center'>{author.bio}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, odioadipisicing elit. Molestiae, odio.</p>

                    {/* social links */}
                    <div className='flex items-center justify-center mt-3 gap-2'>

                        <Link href={`${author.twitter}`}>
                            <Twitter className='size-5' />
                        </Link>
                        <Link href={`${author.github}`}>
                            <GithubIcon className='size-5 ' />
                        </Link>
                        <Link href={`${author.linkedin}`}>
                            <LinkedinIcon className='size-5  ' />
                        </Link>

                    </div>
                </div>


            </div>

            <div className='flex items-center justify-end mr-[10%] '>
                <div className='w-[60%] h-[15px] bg-[#FFD050]'></div>
                <div className='w-[20%] h-[15px] bg-[#592EA9]'></div>
            </div>



            {/* my posts section */}
            <h1 className='w-[90%] mx-auto font-bold text-3xl my-5' >My Posts</h1>

            <hr className='mb-10 w-[90%] mx-auto' />

            <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 w-[80%] mx-auto'>

                {author.posts?.map((post) => (

                    <div key={post._id} className='my-5'>

                        {post.image && (

                            <Link href={`/blog/${post._id}`}>

                                <Image
                                    src={urlFor(post.image).url()}
                                    alt={post.title || 'Blog post image'}
                                    width={800}
                                    height={300}
                                    className='object-cover w-full h-[200px]'
                                    priority={true}  // For important above-the-fold images
                                />
                            </Link>

                        )}


                        <div className='border p-5 rounded-xl shadow-lg'>

                            <Link href={`/blog/${post._id}`}>
                                <h2 className='font-semibold'>{post.category}</h2>
                                <h1 className='font-bold text-xl my-2 line-clamp-2'>{post.title}</h1>
                            </Link>

                            <p className='font-serif'>
                                By {author.name} | {new Date(post.date).toLocaleDateString()}
                            </p>

                            <Link href={`/blog/${post._id}`}>
                                <p className='my-2 line-clamp-4'>{post.description}</p>
                            </Link>
                        </div>
                    </div>

                ))}

            </section>


        </>
    )
}

export default page