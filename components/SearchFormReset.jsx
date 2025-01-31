'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SearchFormReset = () => {

    // RESET FUNCTION
    const reset = () => {
        const form = document.querySelector('.search-form')

        if (form) form.reset()
    }

    return (
        <button type='reset' onClick={reset} className='text-black'>
            <Link href='/' className=' text-black'> <X />  </Link>
        </button>
    )
}

export default SearchFormReset