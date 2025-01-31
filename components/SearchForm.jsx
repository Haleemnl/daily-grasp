import React from 'react'
import SearchFormReset from './SearchFormReset'
import { SendHorizonal } from 'lucide-react'


const SearchForm = ({ query }) => {

    // IN THE SEARCHFORM COMPONENT, destructure the query from your page.jsx and use it in the SearchForm 

    return (


        <form
            action="/"
            // scroll={false}
            className='flex items-center gap-3'
        >

            <input
                name='query'
                defaultValue={query}
                className='w-full outline-none p-3 rounded-2xl border text-lg '
                placeholder='Blog posts'
            />

            <div className='flex gap-2'>

                {/* IN HERE, if query exists, then it should show the SearchFormReset button  */}
                {query && <SearchFormReset />}

                <button type='submit' className=' text-black'> <SendHorizonal className='size-5' /> </button>
            </div>

        </form>

    )
}

export default SearchForm