import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
    return (
        <>

            <div className='flex flex-col items-center justify-center mb-5 bg-[]'>
                <div className=' text-center mt-10 p-10'>
                    <h2 className='font-semibold '>CONTACT US</h2>
                    <h1 className=' font-bold text-3xl'>Let's start a conversation</h1>
                    <p className='text-sm'>Wish to share anything with us? feel free to contact us 😉.</p>
                </div>


                <div className='bg-[#592EA9] flex flex-col lg:flex-row items-center p-10 lg:p-5 gap-5 justify-between text-white w-[80%] sm:w-[50%] rounded-lg'>
                    <div >
                        <p className='text-gray-300'>Working Hours</p>
                        <hr className='mb-5' />

                        <h1>Monday To Friday</h1>
                        {/* <h1>9:00Am to 8:00Pm</h1> */}
                        <p className='text-gray-300'>Our support team is available 24/7.</p>
                    </div>

                    <div>
                        <p className='text-gray-300 '>Contact Us</p>
                        <hr className='mb-5' />

                        <h1>+2348072323050</h1>
                        <p>customer.dailygrasp@gmail.com</p>
                    </div>
                </div>
            </div>

            <ContactForm />

        </>
    )
}

export default page