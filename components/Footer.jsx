

import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Newsletter from './Newsletter';

const Footer = () => {
    return (
        <div className='bg-[#232536] text-white mt-5'>
            <div className='container mx-auto px-4 md:px-6 lg:px-10'>
                {/* Header Section */}
                <div className='flex flex-col md:flex-row md:items-center md:justify-between py-5 space-y-4 md:space-y-0'>
                    <h1 className='font-serif text-xl'>DailyGrasp</h1>
                    <nav>
                        <ul className='flex flex-wrap text-sm text-white gap-4'>
                            <Link href='/'>
                                <li className='hover:text-gray-300 transition-colors'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/blog'>
                                <li className='hover:text-gray-300 transition-colors'>
                                    Blog
                                </li>
                            </Link>
                            <Link href='/about'>
                                <li className='hover:text-gray-300 transition-colors'>
                                    About Us
                                </li>
                            </Link>
                            <Link href='/contact'>
                                <li className='hover:text-gray-300 transition-colors'>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                {/* Newsletter Section */}
                <div className='bg-gray-700 p-4 md:p-10 rounded-lg'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                        <h1 className='font-bold text-lg md:w-[40%]'>
                            Subscribe to our newsletter to get latest updates and news
                        </h1>

                        <Newsletter />

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center py-5 space-y-4 md:space-y-0'>
                    <div className='flex flex-col items-start space-y-2'>
                        <p>customer.dailygrasp@outlook.com</p>
                        <p>+2348072323050</p>
                        <p>&copy; {new Date().getFullYear()}</p>
                    </div>

                    {/* Social Links */}
                    <div className='flex items-center gap-4'>
                        <Link href='/' className='hover:text-gray-300 transition-colors'>
                            <InstagramIcon className='w-5 h-5' />
                        </Link>
                        <Link href='/' className='hover:text-gray-300 transition-colors'>
                            <GithubIcon className='w-5 h-5' />
                        </Link>
                        <Link href='/' className='hover:text-gray-300 transition-colors'>
                            <LinkedinIcon className='w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;