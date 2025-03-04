'use client'

import { useEffect, useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import { Menu } from "lucide-react"; // Icon for the hamburger menu
import axios from "axios";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const checking_user = async () => {
    //         // console.log('checking user fron daskboard layout before.............')
    //         const user = await axios.get('/api/chekuser')
    //         console.log('checking user fron daskboard layout', user.data.email)
    //     }

    //     checking_user()

    // }, [])

    return (
        <div className="flex w-full">
            {/* Sidebar for large screens */}
            <div className="hidden lg:block fixed w-64">
                <Sidebar />
            </div>

            <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-zinc-900 text-white p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}>
                <Menu size={24} />
            </button>

            <div
                className={`z-40 fixed top-0 left-0 w-64 h-full bg-zinc-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform lg:hidden`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="lg:ml-64 w-full">
                {children}
            </div>
        </div>
    );
}


















// 'use client'

// import { useState } from "react";
// import Sidebar from "@/app/components/Sidebar";
// // import axios from "axios";
// // import { useEffect } from "react";

// export default function Layout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {

//     // useEffect(() => {
//     //     const checking_user=async()=>{
//     //         // console.log('checking user fron daskboard layout before.............')
//     //         const user = await axios.get('/api/chekuser')
//     //         // console.log('checking user fron daskboard layout',user.data.email)
//     //     }

//     //     checking_user()

//     // }, [])

//     return (
//         <div className="flex w-full">
//             <div className="fixed hidden md:block w-64">
//                 <Sidebar></Sidebar>
//             </div>
//             <div className="md:ml-64 w-full" >
//                 {children}
//             </div>
//         </div>
//     )
// }
