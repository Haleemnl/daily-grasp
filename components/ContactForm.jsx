'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';

const ContactForm = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');


    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus('Email sent successfully!');
            form.current.reset();
        } catch (error) {
            setStatus('Failed to send email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center justify-center gap-3 p-5  shadow-2xl rounded-lg w-[80%] sm:w-[50%] mx-auto border '>
            <div className='  flex flex-col items-start w-[80%] lg:w-[70%]'>
                <label className='text-sm font-serif'>Name:</label>
                <input
                    type="text"
                    name="user_name"
                    required
                    className='w-full p-3 font-serif text-sm outline-none rounded-lg border'
                    placeholder='Your Name'
                />
            </div>

            <div className='  flex flex-col items-start w-[80%] lg:w-[70%]'>
                <label className='text-sm font-serif'>Email:</label>
                <input
                    type="email"
                    name="user_email"
                    required
                    className='w-full p-3 font-serif text-sm outline-none rounded-lg border'
                    placeholder='Email'
                />
            </div>

            <div className='flex flex-col items-start w-[80%] lg:w-[70%]'>
                <label className='text-sm font-serif'>Message:</label>
                <textarea
                    name="message"
                    required
                    className='w-full p-3 outline-none border'

                />
            </div>


            <Button className='w-[30%] hover:bg-[#d8bd71] bg-[#f5d271] text-black font-semibold font-serif' type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
            </Button>

            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;