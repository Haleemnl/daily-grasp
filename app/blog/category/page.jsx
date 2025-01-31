import { urlFor } from '@/lib/urlFor'
import { client } from '@/sanity/lib/client'
import { CATEGORY_POSTS_QUERY } from '@/sanity/lib/queries'
import { Volleyball } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async () => {

    const posts = await client.fetch(CATEGORY_POSTS_QUERY)


    return (
        <div>

            <div className='flex items-center justify-center mb-10 bg-[#F4F0F8]'>
                <div className=' text-center my-10 p-10'>
                    <h1 className=' font-bold text-3xl'>Categories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, explicabo.</p>
                    <h2 className='mt-5'>blog » Category</h2>
                </div>
            </div>

            {/* section */}
            <section className='grid grid-cols-1 sm:grid-cols-8 mx-auto w-[90%] gap-10'>

                <div className=' sm:col-span-5 md:col-span-6'>


                    {posts.map(({ category, title, description, _id, image }) => (

                        <div key={_id} className='flex flex-col md:flex-row items-start md:items-center ml-2 md:ml-0 gap-3 p-5 border rounded-md mb-5'>
                            <img
                                src={urlFor(image).url()}
                                alt=""
                                className='object-cover w-full h-[150px] md:w-1/3 md:ml-5 '
                            />

                            <div className=''>
                                <h2 className='font-medium'>{category}</h2>
                                {/* title */}
                                <Link href={`/blog/${_id}`}>
                                    <h1 className='font-bold text-2xl'>{title}</h1>
                                    <p> {description}</p>
                                </Link>
                            </div>

                        </div>

                    ))}

                </div>

                <div className='sm:col-span-3 md:col-span-2'>
                    <h1 className='mb-5 font-semibold'>Categories</h1>

                    <Link href='/blog/category/entertainment'>
                        <div className='flex items-center gap-2 border rounded-3xl mb-5 p-5'>
                            <img
                                src="/entertainment.png"
                                alt=""
                                className='object-cover w-[30px] h-[30px] rounded'
                            />
                            <h2 className='font-semibold text-base'>Entertainment</h2>
                        </div>
                    </Link>

                    <Link href='/blog/category/tech'>
                        <div className='flex items-center gap-2 border rounded-3xl mb-5 p-5'>
                            <img
                                src="/technology.png"
                                alt=""
                                className='w-[40px] h-[40px] rounded'
                            />
                            <h2 className='font-semibold text-base'>Tech</h2>
                        </div>
                    </Link>

                    <Link href='/blog/category/finance'>
                        <div className='flex items-center gap-2 border rounded-3xl mb-5 p-5'>
                            <img
                                src="/economy.png"
                                alt="economy"
                                className='w-[30px] h-[30px] rounded shadow-lg'
                            />
                            <h2 className='font-semibold text-base'>Finance</h2>
                        </div>
                    </Link>

                    <Link href='/blog/category/sports'>
                        <div className='flex items-center gap-2 border rounded-3xl mb-5 p-5'>
                            <Volleyball />
                            <h2 className='font-semibold text-base'>Sports </h2>
                        </div>
                    </Link>

                    <Link href='/blog/category/designs'>
                        <div className='flex items-center gap-2 border rounded-3xl mb-5 p-5'>
                            <img
                                src="/designs.png"
                                alt=""
                                className='w-[40px] h-[40px] rounded'
                            />
                            <h2 className='font-semibold text-base'> Designs</h2>
                        </div>
                    </Link>


                </div>
            </section>

        </div>
    )
}

export default page