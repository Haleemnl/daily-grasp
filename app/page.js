import AllPosts from "@/components/AllPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Newsletter from "@/components/Newsletter";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_POSTS_QUERY, POST_BY_FEATURED_QUERY } from "@/sanity/lib/queries";
import { GithubIcon, LinkedinIcon, Twitter, Volleyball } from "lucide-react";
import Link from "next/link";


export default async function Home({ searchParams }) {

  // const posts = await client.fetch(HOME_POSTS_QUERY)
  const query = (await searchParams).query
  const params = { search: query || null }

  // post data
  const { data: posts } = await sanityFetch({ query: HOME_POSTS_QUERY, params });



  const featuredPosts = await client.fetch(POST_BY_FEATURED_QUERY)

  return (
    <div >

      <section className="bg-[url('/bgimage.png')] bg-cover bg-no-repeat h-[80vh] md:h-screen flex flex-col items-center justify-center text-white 
bg-black/40 bg-blend-overlay ">

        <div className="text-center w-full space-y-3">
          <p className="font-bold">Our Blog</p>

          <h1 className="text-3xl font-bold">Stories and Interviews</h1>

          <p className="w-[80%] sm:w-[60%] md:w-[40%] text-base mx-auto">Subscribe to learn about new product features, the latest in technology solutions and updates</p>

          <Newsletter />
          <p>We care about your data</p>
        </div>
      </section>


      {/* BLOG */}
      <secton className='grid grid-cols-1 md:grid-cols-8 items-start justify-between w-[95%] my-10 mx-auto gap-6 p-10 bg-slate-100 rounded-md'>


        {/* featurerd posts container */}
        <div className='  md:col-span-4 lg:col-span-5'>
          <h1 className='font-bold text-lg'> Featured <span className="bg-gradient-to-r from-[#747ed1] to-[#7f5191] text-transparent bg-clip-text">Post</span></h1>


          {featuredPosts.map((featuredPost) => (
            <FeaturedPosts
              key={featuredPost._id}
              featuredPost={featuredPost}

            />
          ))}

        </div>


        {/* recent posts container */}
        <div className=' md:col-span-4 lg:col-span-3'>

          <div className=' space-y-3 w-full '>
            <h1 className='font-serif font-extrabold bg-gradient-to-r from-[#747ed1] to-[#7f5191] text-transparent bg-clip-text ' >Lookng for a post? we've probably written about it!</h1>

            <SearchForm
              query={query}
            />
          </div>

          <h1 className='font-bold text-lg mt-2'>Top 5 Recent <span className="bg-gradient-to-r from-[#747ed1] to-[#7f5191] text-transparent bg-clip-text">Posts</span></h1>

          {posts.map((post) => (
            <AllPosts
              key={post._id}
              post={post}
            />
          ))}

        </div>

      </secton>


      <div className='flex items-center justify-end mr-[10%] '>
        <div className='w-[60%] h-[23px] bg-[#FFD050]'></div>
        <div className='w-[20%] h-[23px] bg-[#592EA9]'></div>
      </div>

      {/* about section */}
      <secton className='flex flex-col sm:flex-row items-center justify-between w-[80%] mx-auto gap-10 p-10 bg-[#F4F0F8]'>

        <div className=''>
          <h1 className='font-bold'>Our Mission</h1>
          <h2 className='font-bold text-lg'> We are a community of writers who share their learnings</h2>
          <p>
            To deliver comprehensive, well-researched, and engaging content that empowers readers with knowledge across entertainment, sports, design, finance, and technology, while maintaining the highest standards of journalistic integrity.
          </p>

          <Link href='/about'> <p className='text-blue-600 mt-5 cursor-pointer'>Read More</p></Link>

        </div>


        <div className=''>
          <h1 className='font-bold '>Our Vision</h1>
          <h2 className='font-bold text-lg'>Creating valuabe content for creatives all around the world</h2>
          <p>

            To become the most trusted digital platform for insightful coverage and analysis, fostering a global community of informed readers who rely on us for their daily dose of meaningful content.
          </p>

          <Link href='/about'> <p className='text-blue-600 mt-5 cursor-pointer'>Read More</p></Link>
        </div>

      </secton>



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


          <div className='border  p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110'>
            <Link href='/blog/category/sports'>
              <Volleyball />
              <h1 className='font-bold'>Sport</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Link>
          </div>

          <div className='border col-span-2 sm:col-span-1 p-3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110'>
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




        </div>
      </section>



      {/* Authors */}
      <section className='w-[80%] bg-slate-100 mx-auto m-10 p-5 rounded-xl' >
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

      </section >



      <section className='text-center my-10  mx-auto w-[80%] md:w-[25%]'>
        <h1 className='font-bold text-xl'>Join our team to be a part of our story</h1>
        <p>We'd love to hear from you! Reach out with your questions, suggestions, or collaboration ideas.</p>
        <Link href='/contact'>
          <Button className=' px-[48px] py-[20px] mt-5 text-black font-serif font-semibold hover:bg-[#d8bd71] bg-[#f5d271]'>join</Button >
        </Link>
      </section>

    </div >
  );
}
