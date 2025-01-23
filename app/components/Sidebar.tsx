"use client";

import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiHistory, BiMoney } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { RiDashboard2Line } from 'react-icons/ri'

export default function Sidebar() {

  const path=usePathname()

  const menulist = [
    {
      name:"Dashboard",
      icon:RiDashboard2Line,
      link:'/dashboard'
    },
    {
      name:"History",
      icon:BiHistory,
      link:'/dashboard/history'
    },
    {
      name:"Billing",
      icon:BiMoney,
      link:'/dashboard/billing'
    },
    {
      name:"Settings",
      icon:CiSettings,
      link:'/dashboard/settings'
    },
  ]
  return (
    <div className='border-r-2 border-zinc-800 h-screen w-64 flex flex-col items-center'>
        <Image src="/logo.svg" width={150} height={150} alt="logo" className='p-2 my-6' />
        <hr className='w-full border-zinc-800 mb-2' />
        {menulist.map((menu, index) => (
         <div key={index} className={`flex items-center p-2 ${path==menu.link && "bg-purple-700"} hover:bg-purple-800 cursor-pointer rounded-lg m-1 mr-10 w-52` }>
            <menu.icon className='mr-2 text-xl font-bold'></menu.icon>
            <p>{menu.name}</p>
         </div>
        ))}
    </div>
  )
}
