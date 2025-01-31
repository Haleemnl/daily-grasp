import { urlFor } from '@/lib/urlFor'
import Link from 'next/link'
import React from 'react'

const AllPosts = ({ post }) => {

    const { title, author, date, _id, image } = post

    return (
        <div className=' w-full my-2 border rounded-lg shadow-lg px-2 flex items-center hover:scale-105'>

            <Link href={`blog/${_id}`}>
                <img
                    src={urlFor(image).url()}
                    alt="image"
                    className='object-cover rounded-lg w-20 h-20'
                />
            </Link>

            <div className='  p-2 mb-5 rounded-md'>
                <Link href={`/author/${author._id}`}> <p className=' pt-5 font-serif'>By {author.name} | <span>{new Date(date).toLocaleDateString()}</span>.</p></Link>
                <Link href={`blog/${_id}`}>
                    <h1 className='font-bold items-start mt-2'>
                        { }
                        {title}
                    </h1>
                </Link>
            </div>

        </div>
    )
}

export default AllPosts