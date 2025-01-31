'use client'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';

const Newsletter = () => {
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
        <form ref={form} onSubmit={sendEmail} className='flex items-center justify-center gap-3 p-5  shadow-2xl rounded-lg w-[90%] md:w-[40%] mx-auto '>


            <input
                type="email"
                name="user_email"
                required
                className='w-full p-3 font-serif text-sm outline-none rounded-lg border'
                placeholder='Email'
            />


            <Button className='w-[30%] md:w-[20%] hover:bg-[#d8bd71] bg-[#f5d271] text-black font-semibold font-serif' type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Subscribe'}
            </Button>

            {status && <p>{status}</p>}
        </form>
    );
};

export default Newsletter;