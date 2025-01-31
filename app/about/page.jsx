import { Button } from '@/components/ui/button'
import { GithubIcon, InstagramIcon, LinkedinIcon, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='mt-20 w-[90%] mx-auto '>

            <div className='flex flex-col md:flex-row items-center justify-between gap-10 bg-slate-100 p-10 rounded-md mb-5 '>
                <div className='space-y-5'>
                    <h2 className='text-md'>About Us</h2>
                    <h1 className='font-bold text-3xl w-full md:w-10/12'>We are a team of content writers who share their learnings.</h1>
                </div>

                <div className='w-full text-lg md:w-[70%]'>
                    Your trusted source for insightful coverage of entertainment, sports, design, finance, and technology. We grasp the stories that matter to you.
                </div>
            </div>

            <div className=''>
                <img src="/about.jpg" alt="" />
            </div>

            <secton className='flex flex-col sm:flex-row items-center justify-between mx-auto gap-10 p-10 bg-[#F4F0F8]'>

                <div className=''>
                    <h1 className='font-bold'> Our Mission</h1>
                    <h2 className='font-bold text-lg'> We are a community of writers who share their learnings</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla excepturi dicta saepe? Quae ea voluptate dignissimos amet minus dolores vel.
                    </p>

                </div>


                <div className=''>
                    <h1 className='font-bold '>Our Vision</h1>
                    <h2 className='font-bold text-lg'>Creating valuabe content for creatives all around the world</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla excepturi dicta saepe? Quae ea voluptate dignissimos amet minus dolores vel.
                    </p>

                </div>

            </secton>

            <section className='flex flex-col sm:flex-row items-center justify-between mt-5'>
                <div className='w-full md:W-1/2 space-y-3'>
                    <h1 className='font-bold text-2xl'>
                        Our team of creatives
                    </h1>
                    <h2 className='font-semibold text-base'>
                        Building a community of readers who share our passion for knowledge and discovery.
                    </h2>
                    <p>Founded in 2025, DailyGrasp emerged from a shared vision to create a platform that brings together diverse perspectives on the topics that shape our world. We believe in the power of well-crafted content to inform, inspire, and connect people.
                    </p>
                </div>
                <img src="/Know more.png" alt="" className='w-full sm:w-1/2 object-cover mt-3 sm:mt-0' />
            </section>


            <section className='flex gap-4 flex-col sm:flex-row items-center justify-between mt-10'>

                <img src="/why we strated.png" alt="" className='w-full sm:w-1/2 object-cover max-sm:hidden ' />

                <div className='w-full md:W-1/2 space-y-3'>
                    <h1 className='font-bold text-2xl'>
                        Our team of creatives
                    </h1>
                    <h2 className='font-semibold text-base'>
                        We deliver well-researched, engaging articles that inform and inspire our readers.
                    </h2>
                    <p>At DailyGrasp, we believe in the power of storytelling to connect, educate, and inspire. Our dedicated team of writers and editors works tirelessly to bring you comprehensive coverage across entertainment, sports, design, finance, and technology.
                    </p>
                </div>

                <img src="/why we strated.png" alt="" className='w-full sm:w-1/2 object-cover mt-3 sm:hidden' />
            </section>





            {/* Authors */}
            <section className=' bg-slate-100 mx-auto m-10 p-5 rounded-xl'>
                <h1 className='font-bold text-center text-lg'>List Of Authors</h1>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mt-5'>
                    <div className='border rounded-xl w-full p-3 bg-[#FBF6EA]'>

                        <img
                            src="/bgimage.png"
                            alt=""
                            className='w-[40px] h-[40px] rounded-full mx-auto'
                        />
                        <Link href='/author'>
                            <h1 className='font-bold text-center'>Abdulhaleem</h1>
                            <p className='text-center text-sm'>Passionate about technology and finance, leading our tech and finance coverage.</p>
                        </Link>

                        {/* social links */}
                        <div className='flex items-center justify-center mt-3 gap-2'>

                            <Link href='https://x.com/haleemnl'>
                                <Twitter className='size-4' />
                            </Link>
                            <Link href='https://github.com/Haleemnl'>
                                <GithubIcon className='size-4 ' />
                            </Link>
                            <Link href='https://www.linkedin.com/in/abdulhaleem-alao-9528a0228/'>
                                <LinkedinIcon className='size-4  ' />
                            </Link>

                        </div>

                    </div>

                    <div className='border rounded-xl w-full p-3 bg-[#F4F4F4]'>
                        <img
                            src="/bgimage.png"
                            alt=""
                            className='w-[40px] h-[40px] rounded-full mx-auto'
                        />
                        <Link href='/author'>
                            <h1 className='font-bold text-center'>Faidat</h1>
                            <p className='text-center text-sm'>Expert in design and entertainment journalism, bringing stories that matter.</p>
                        </Link>
                        {/* social links */}
                        <div className='flex items-center justify-center mt-3 gap-2'>

                            <Link href='/'>
                                <Twitter className='size-4' />
                            </Link>
                            <Link href='/'>
                                <GithubIcon className='size-4 ' />
                            </Link>
                            <Link href='/'>
                                <LinkedinIcon className='size-4  ' />
                            </Link>

                        </div>
                    </div>

                </div>
            </section>



            <section className='text-center my-10  mx-auto w-[80%] md:w-[25%]'>
                <h1 className='font-bold text-xl'>Join our team to be a part of our story</h1>
                <p>We'd love to hear from you! Reach out with your questions, suggestions, or collaboration ideas.</p>
                <Button className=' px-[48px] py-[20px] mt-5 text-black font-serif font-semibold hover:bg-[#d8bd71] bg-[#f5d271]'>join</Button >
            </section>

        </div>
    )
}

export default page