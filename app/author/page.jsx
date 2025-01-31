import { client } from '@/sanity/lib/client'
import { AUTHOR_QUERY } from '@/sanity/lib/queries'
import { GithubIcon, InstagramIcon, LinkedinIcon, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async () => {

    const authors = await client.fetch(AUTHOR_QUERY)
    return (

        <div className='mt-20'>


            <div className="w-full max-w-6xl mx-auto p-5 bg-white shadow-lg mb-14">

                <div className="flex flex-col items-center gap-4">
                    <User className="w-8 h-8 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-800">Our Authors</div>
                </div>

                <div>
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The voices behind DailyGrasp are passionate writers dedicated to bringing you insightful content
                            across various domains. Our diverse team of authors specializes in entertainment, sports,
                            design, finance, and technology, ensuring comprehensive coverage of topics that matter to you.
                        </p>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-800 mb-2">What Sets Our Authors Apart</h3>
                            <div className="grid gap-3 text-gray-700">
                                <p className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Expert knowledge across multiple categories
                                </p>
                                <p className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Commitment to delivering well-researched and engaging content
                                </p>
                                <p className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                    Regular updates and fresh perspectives on trending topics
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-600 italic">
                            Each of our authors brings their unique expertise and perspective to DailyGrasp,
                            contributing to our mission of providing valuable insights and engaging content
                            to our readers.
                        </p>
                    </div>
                </div>
            </div>


            <h1 className='font-bold text-center text-lg'>List Of Authors</h1>

            <section className='w-[80%] bg-slate-100 mx-auto m-10 p-5 rounded-xl shadow-lg'>

                <div className='flex flex-col sm:flex-row items-center justify-center gap- mt-5'>

                    {authors.map(({ name, _id }) => (

                        //authors

                        <div key={_id} className='border rounded-xl w-full p-3 bg-[#FBF6EA]'>

                            <Link href={`author/${_id}`}>
                                <img
                                    src="/bgimage.png"
                                    alt=""
                                    className='w-[40px] h-[40px] rounded-full mx-auto'
                                />

                                <h1 className='font-bold text-center'>{name}</h1>

                                <p className='text-center text-sm'>Content Writer @ company.</p>
                            </Link>



                            {/* social links */}
                            <div className='flex items-center justify-center mt-3 gap-2'>

                                <Link href='/'>
                                    <InstagramIcon className='size-4' />
                                </Link>
                                <Link href='/'>
                                    <GithubIcon className='size-4 ' />
                                </Link>
                                <Link href='/'>
                                    <LinkedinIcon className='size-4  ' />
                                </Link>

                            </div>

                        </div>


                    ))}

                </div>

            </section>


        </div>

    )
}

export default page



