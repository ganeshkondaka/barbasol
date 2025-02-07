import React from 'react'
import { BsStripe } from 'react-icons/bs'
// import { FaReact } from 'react-icons/fa'
import { RiGeminiFill, RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { RainbowButton } from '@/components/ui/rainbow-button'
import Particles from '@/components/ui/particles'
import { BiLogoTypescript } from 'react-icons/bi'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className='flex flex-col items-center justify-center mt-16 bg-zinc-950 text-white'>
            <div className='bg-zinc-800 text-white px-3 pt-1 text-center rounded-full text-[11px]'>
                ✨ Using the power of Next.js, Tailwind CSS, and TypeScript
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <p className="text-4xl md:text-6xl font-bold">AI-Powered</p>
                <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Content Generation</p>
                <p className="text-4xl md:text-6xl font-bold">Made Simple</p>
            </div>
            <div className='text-center text-zinc-500 text-[11px] md:text-sm mt-6'>18-in-1 AI tool suite for all your content needs. <br /> Generate hashtags, titles, debug code, and more with just one click. <br /> &#40; just like Barbasol 😆 &#41; </div>
            <div className='flex flex-row items-center justify-center gap-5 mt-6'>

                {/* <button className='hover:bg-purple-500 text-sm border border-zinc-700 rounded-lg font-bold px-5 bg-slate-200 text-black p-3'>learn more</button> */}
                <Link href={'#features'}> <RainbowButton className='scale-100 hover:scale-105 ' >Learn more</RainbowButton></Link>
                <Link href={'/dashboard'} className='scale-100 hover:scale-105 hover:bg-zinc-800 text-sm border border-zinc-700 px-5 rounded-lg font-bold bg-transparent text-white p-3'>Get started</Link>
                {/* <ShineBorder className="relative flex  w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                </ShineBorder> */}
            </div>
            <div className='flex flex-col items-center justify-center text-zinc-600 mt-16'>
                <div className='text-[11px]'>Experience the power of our 18-in-1 AI suite</div>
                <div className='flex flex-row items-center justify-center gap-2 text-3xl mt-4'>
                    <TbBrandNextjs /><BiLogoTypescript /><RiTailwindCssFill /><RiGeminiFill /><BsStripe className='text-2xl' />
                </div>
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                // staticity={40}
                vx={0.3}
                refresh
            />
        </div>
    )
}
