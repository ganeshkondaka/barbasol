import Sidebar from "@/app/components/Sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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