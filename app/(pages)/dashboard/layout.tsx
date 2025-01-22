import Sidebar from "@/app/components/Sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <div className="fixed hidden md:block w-64">
                <Sidebar></Sidebar>
            </div>
            <div className="md:ml-64 p-6" >
                {children}
            </div>
        </div>
    )
}