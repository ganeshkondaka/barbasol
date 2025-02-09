'use client'

import { SignedIn } from '@clerk/nextjs'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

// Dynamically import UserButton with no SSR (solves hydration error)
const UserButton = dynamic(() => import('@clerk/nextjs').then((mod) => mod.UserButton), {
    ssr: false,
    loading: () => <div className="w-8 h-8 rounded-full bg-zinc-800 animate-pulse" />
})

export default function Searchbar() {
    return (
        <div className='w-full flex justify-between items-center p-4'>
            <div className='flex items-center rounded-lg m-2 border-2 border-zinc-800 p-2'>
                {/* <BiSearch className='inline ml-2'></BiSearch> */}
                <p className='text-[11px] md:text-sm text-zinc-400'>Give a star on github &gt;&gt; ⭐</p>
                <a href="https://github.com/ganeshkondaka/barbasol" ><BsGithub className='scale-100 hover:scale-125 text-zinc-300 hover:text-white transition duration-600 animate-pulse hover:animate-none'></BsGithub></a>
            </div>
            <div className='flex items-center'>
                <p className='w-auto mr-2 text-[11px] bg-purple-700 px-3 py-1 rounded-full hidden md:block'>Join membership just for 99/Month</p>
                <SignedIn>
                    <Suspense fallback={<div className="w-8 h-8 rounded-full bg-zinc-800 animate-pulse" />}>
                        <UserButton />
                    </Suspense>
                </SignedIn>
            </div>
        </div>
    )
}
