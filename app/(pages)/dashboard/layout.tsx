'use client'

import Sidebar from "@/app/components/Sidebar";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = useUser();
    useEffect(() => {
        localStorage.setItem('count', '5')
        const emailId = user?.primaryEmailAddress?.emailAddress;
        localStorage.setItem('email', emailId || '')
    }, [user])

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