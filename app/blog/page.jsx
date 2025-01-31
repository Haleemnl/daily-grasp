import SearchForm from '@/components/SearchForm'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { POST_BY_FEATURED_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { EyeIcon, Volleyball } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/urlFor'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/live'
// import { groq } from 'next-sanity'
import groq from 'groq';
import PaginationSection from '@/components/PaginationSection'


const getPosts = async (lastPageNum = 0) => {
    const query = groq`*[_type == 'post'] | order(date desc) [${lastPageNum}...${lastPageNum + 15
        }] {
    _id,
    title,
    slug,
    date,
    author->{
      _id,
      name,
      image,
      bio
    },
    views,
    description,
    category,
    image
    }`;
    return client.fetch(query, { lastId: lastPageNum });
};

const getTotalPosts = async () => {
    const query = groq`count(*[_type == 'post'])`;
    return client.fetch(query);
};


const page = async ({ searchParams }) => {




    const featuredPosts = await client.fetch(POST_BY_FEATURED_QUERY)

    // const query = (await searchParams).query
    // const params = { search: query || null }

    // const { data: posts } = await sanityFetch({ query: POSTS_QUERY, params });


    const pageNum = Number(searchParams?.page ?? 0);
    const posts = await getPosts(pageNum);
    const postsNum = await getTotalPosts();




    return (
        <div className='mt-20'>



            {/* featured post */}
            <div className=' bg-gray-300 py-10 px-10'>
                <div className=' w-full md:w-[80%] mx-auto mb-5  p-2'>

                    {featuredPosts.map(({ date, description, title, author, image, _id, category }) => (

                        <div key={_id}>

                            <div className='flex flex-col md:flex-row items-center md:justify-between  md:space-x-10 space-y-2 md:space-y-0  p-4'>

                                <div className='w-full '>
                                    <h1 className='font-bold text-2xl my-3'>{category}  <span className='bg-gradient-to-r from-[#747ed1] to-[#7f5191] text-transparent bg-clip-text '>Post</span></h1>

                                    <h1 className='font-bold text-2xl my-3'>{title}</h1>
                                    <p className='my-2 text-sm'>By  {author.name}  |
                                        {new Date(date).toLocaleDateString()}</p>
                                    <p className='text-lg font-normal font-serif'>{description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, odit.</p>


                                    <Link href={`/blog/${_id}`}>
                                        <Button className=' mt-5 font-serif p-[20px] text-black font-semibold hover:bg-[#d8bd71] bg-[#f5d271]'>
                                            Read More »
                                        </Button >
                                    </Link>
                                </div>


                                {/* featured post image */}
                                <Image
                                    src={urlFor(image).url()}
                                    alt={title || 'Blog post image'}
                                    width={400}    // Larger width for better quality
                                    height={300}   // More proportional height
                                    className='object-cover w-full md:w-[50%] h-80  md:max-h-80 my-8 md:my-0  rounded-lg'
                                />

                            </div>


                        </div>

                    ))}

                    <hr className='bg-black  mt-5' />


                </div>

            </div>






            {/* all posts section */}

            <h1 className="w-[90%] mx-auto font-bold text-2xl font-serif my-5" >All Posts </ h1>
            <hr className='mb-10 w-[90%] mx-auto' />


            <section className='grid mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90%] lg:w-[85%] mx-auto'>


                {posts.map(({ image, category, title, author, date, description, _id, views }) => (

                    <div key={_id} className='border rounded-xl shadow-lg'>


                        <Link href={`/blog/${_id}`} >

                            <Image
                                src={urlFor(image).url()}
                                alt={title || 'Blog post image'}
                                width={800}    // Larger width for better quality
                                height={300}   // More proportional height
                                className='object-cover w-full h-[200px]'  // Fixed height with cover
                            />

                        </Link>


                        < div className='p-4' >

                            {/* category */}
                            <Link href={`/blog/${_id}`}>
                                <div className='flex items-center gap-5 '>
                                    <h2 className='font-semibold mb-2 font-sans'>{category} </h2>
                                    {/* <span className='flex items-center text-sm gap-1'><EyeIcon className='size-3' />{views}</span> */}
                                </div>

                                <h1 className='font-bold text-xl mb-2'>{title} Lorem ipsum dolor sit amet.</h1>
                            </Link>

                            <hr />

                            <Link href={`/author/${author._id}`}>
                                <div className='flex items-center gap-x-2 mt-2'>
                                    <img
                                        src={urlFor(author.image).url()}
                                        alt=""
                                        className='h-8 w-8  rounded-full'
                                    />


                                    <p className=' mt-2 font-serif text-sm'>By {author.name} | <span>{new Date(date).toLocaleDateString()}</span>
                                    </p>


                                </div>
                            </Link>

                            <Link href={`/blog/${_id}`}>
                                <p className='my-2 text-lg font-serif'>{description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laudantium!</p>
                            </Link>
                        </div>
                    </div >


                ))}



            </section >

            <PaginationSection maxPage={postsNum} />



            <section className='w-[90%] mx-auto mt-10 '>
                <h1 className='font-bold text-lg'>All Categories</h1>

                <div className='grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-3 mt-5'>

                    <Link href='/blog/category/entertainment'>
                        <div className='border p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 bg-white '>
                            <img
                                src="/entertainment.png"
                                alt=""
                                className='object-cover w-[30px] h-[30px] rounded'
                            />
                            <h1 className='font-bold'>Entertainment</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                    </Link>


                    <div className='border p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110'>
                        <Link href='/blog/category/designs'>
                            <img
                                src="/designs.png"
                                alt=""
                                className='w-[40px] h-[40px] rounded'
                            />
                            <h1 className='font-bold'>Designs</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </div>



                    <div className='border p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110'>
                        <Link href='/blog/category/finance'>
                            <img
                                src="/economy.png"
                                alt="economy"
                                className='w-[30px] h-[30px] rounded shadow-lg'
                            />
                            <h1 className='font-bold'>Finance</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </div>



                    <div className='border p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110'>
                        <Link href='/blog/category/tech'>
                            <img
                                src="/technology.png"
                                alt=""
                                className='w-[40px] h-[40px] rounded'
                            />
                            <h1 className='font-bold'>Technology</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </div>

                    <div className='border p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110'>
                        <Link href='/blog/category/sports'>
                            <Volleyball />
                            <h1 className='font-bold'>Sport</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Link>
                    </div>


                </div>
            </section>


            <section className='text-center my-10  mx-auto w-[80%] md:w-[25%]'>
                <h1 className='font-bold text-xl'>Join our team to be a part of our story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <Button className=' px-[48px] py-[20px] mt-5 text-black font-serif font-semibold hover:bg-[#d8bd71] bg-[#f5d271]'>join</Button >
            </section>


        </div >
    )
}

export default page