'use client'

import { SignedIn } from '@clerk/nextjs'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import { BiSearch } from 'react-icons/bi'

// Dynamically import UserButton with no SSR (solves hydration error)
const UserButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.UserButton), {
    ssr: false,
    loading: () => <div className="w-8 h-8 rounded-full bg-zinc-800 animate-pulse"/>
})

export default function Searchbar() {
    return (
        <div className='w-full flex justify-between items-center p-4'>
            <div className='flex items-center rounded-lg m-2 border-2 border-zinc-800'>
                <BiSearch className='inline ml-2'></BiSearch>
                <input type="text" 
                        suppressHydrationWarning={true}
                        placeholder="Search" className='inline bg-transparent  rounded-lg m-2 outline-none' />
            </div>
            <div className='flex items-center'>
                <p className='w-auto mr-2 text-[11px] bg-purple-700 px-3 py-1 rounded-full hidden md:block'>Join membership just for 99/Month</p>
                <SignedIn>
                    <Suspense fallback={<div className="w-8 h-8 rounded-full bg-zinc-800 animate-pulse"/>}>
                        <UserButton />
                    </Suspense>
                </SignedIn>
            </div>
        </div>
    )
}
