'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X, Home, Users, Phone, FolderKanban, NewspaperIcon } from 'lucide-react'
import { ModeToggle } from './Darkmode'


const navItems = [
    {
        name: 'Blog',
        href: '/blog',
        icon: <NewspaperIcon className="w-4 h-4" />
    },
    {
        name: 'Categories',
        href: '/blog/category',
        icon: <FolderKanban className="w-4 h-4" />
    },
    {
        name: 'About',
        href: '/about',
        icon: <Users className="w-4 h-4" />
    },
    {
        name: 'Contact ',
        href: '/contact',
        icon: <Phone className="w-4 h-4" />
    },

    {
        name: 'Terms',
        href: '/privacy&policy',
        icon: <FolderKanban className="w-4 h-4" />
    }
]

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-white shadow-md fixed w-full z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}

                    <Link href="/" className="">
                        {/* <div className="bg-slate-700 text-white font-bold text-xl px-4 py-2 rounded-xl">
                                DAILYGRASP
                            </div> */}

                        <img src="/logo.png" alt="" className='w-24' />
                    </Link>

                    {/* <ModeToggle /> */}


                    {/* Desktop Navigation */}
                    <div className="max-md:hidden">
                        <div className="ml-10 flex items-center space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile-view Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>



            {/* Mobile Navigation */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform  ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                 transition-transform duration-300 ease-in-out md:hidden `}  >

                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* mobile nav lists */}
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50  px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0  right-64 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsOpen(false)}
                >

                </div>
            )}
        </nav>
    )
}

export default Header