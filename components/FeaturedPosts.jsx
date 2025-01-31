import Link from "next/link"
import { Button } from "./ui/button"
import { urlFor } from "@/lib/urlFor"
import Image from "next/image"

const FeaturedPosts = ({ featuredPost }) => {

    const { author, image, title, description, date, _id } = featuredPost

    return (
        <div className=' p-2'>
            <Image
                src={urlFor(image).url()}
                alt={title || 'Blog post image'}
                width={800}    // Larger width for better quality
                height={400}   // More proportional height
                className='object-cover w-full max-h-[400px]'  // Fixed height with cover
            />
            <Link href={`/author/${author._id}`}> <p className=' pt-5 mb-5'>By {author.name} | <span> {new Date(date).toLocaleDateString()} </span> .</p></Link>

            <Link href={`blog/${_id}`}>
                <h1 className='font-bold items-start mt-2'>
                    {title}
                </h1>

                <p className='w-[80%] mb-2'>
                    {description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, ad.
                </p>
            </Link>

            <Link href={`/blog`}>
                <Button className=' px-[48px] py-[20px] mt-5 text-black font-serif font-semibold hover:bg-[#d8bd71] bg-[#f5d271]'>
                    Read More
                </Button >
            </Link>
        </div>
    )
}

export default FeaturedPosts