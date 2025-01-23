import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function Searchbar() {
    return (
        <div className='w-full flex justify-between items-center p-4'>
            <div className='flex items-center rounded-lg m-2 border-2 border-zinc-800'>
                <BiSearch className='inline ml-2'></BiSearch>
                <input type="text" placeholder="Search" className='inline bg-transparent  rounded-lg m-2 outline-none' />
            </div>
            <div>
                <p className='w-auto text-[11px] bg-purple-700 px-3 py-1 rounded-full'>Join membership just for 99/Month</p>
            </div>
        </div>
    )
}
