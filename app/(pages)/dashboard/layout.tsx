'use client'

import Sidebar from "@/app/components/Sidebar";
// import axios from "axios";
// import { useEffect } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // useEffect(() => {
    //     const checking_user=async()=>{
    //         // console.log('checking user fron daskboard layout before.............')
    //         const user = await axios.get('/api/chekuser')
    //         // console.log('checking user fron daskboard layout',user.data.email)
    //     }

    //     checking_user()

    // }, [])

    return (
        <div className="flex w-full">
            <div className="fixed hidden md:block w-64">
                <Sidebar></Sidebar>
            </div>
            <div className="md:ml-64 w-full" >
                {children}
            </div>
        </div>
    )
}