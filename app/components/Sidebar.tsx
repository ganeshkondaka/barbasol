"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiHistory, BiMoney } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { PiBeerBottleFill } from 'react-icons/pi';
import { RiDashboard2Line } from 'react-icons/ri'

export default function Sidebar() {

  const path = usePathname()

  const menulist = [
    {
      name: "Dashboard",
      icon: RiDashboard2Line,
      link: '/dashboard'
    },
    {
      name: "History",
      icon: BiHistory,
      link: '/dashboard/history'
    },
    {
      name: "Billing",
      icon: BiMoney,
      link: '/dashboard/billing'
    },
    {
      name: "Settings",
      icon: CiSettings,
      link: '/dashboard/settings'
    },
  ]
  return (
    <div className='border-r-2 border-zinc-800 h-screen w-64 flex flex-col items-center'>

      {/* <Image src="/logo.svg" width={150} height={150} alt="logo" className='p-2 my-6' /> */}
      <Link href="/" className='flex items-center py-6 mr-4'>
        <PiBeerBottleFill className='inline mx-2 text-2xl text-yellow-400' />
        <p className={`text-2xl font-extrabold inline font-sans text-purple-100`}>Barbasol</p>      </Link>
        {/* <p className={`text-2xl font-extrabold inline `}>Barbasol</p>      </Link> */}
      <hr className='w-full border-zinc-800 mb-2' />

      {menulist.map((menu, index) => (
        <Link href={menu.link} key={index} className={`flex items-center p-2 ${path == menu.link && "bg-purple-700"} hover:bg-purple-800 cursor-pointer rounded-lg m-1 mr-10 w-52`}>
          <menu.icon className='mr-2 text-xl font-bold'></menu.icon>
          <p>{menu.name}</p>
        </Link>
      ))}
    </div>
  )
}
