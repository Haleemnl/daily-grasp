import { urlFor } from '@/lib/urlFor'
import Link from 'next/link'
import React from 'react'

const AllPosts = ({ post }) => {

    const { title, author, date, _id, image } = post

    return (
        <div className="w-full my-4 border rounded-xl shadow-md p-4 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-lg transition-shadow duration-300">
            <Link href={`blog/${_id}`} className="flex-shrink-0 w-full md:w-24">
                {image && (
                    <div className="w-full h-48 md:h-24 rounded-lg overflow-hidden">
                        <img
                            src={urlFor(image).url()}
                            alt={title || "Blog post image"}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </Link>

            <div className="flex-1 p-2">
                <Link href={`/author/${author._id}`} className="hover:underline">
                    <p className="text-sm text-gray-600 font-serif">
                        By {author.name} |{" "}
                        <time dateTime={date} className="font-sans">
                            {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </p>
                </Link>

                <Link href={`blog/${_id}`} className="hover:underline">
                    <h1 className="text-base md:text-xl font-bold mt-2 line-clamp-2">
                        {title}
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default AllPosts