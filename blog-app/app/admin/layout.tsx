import { assets } from "@/asset/assets"
import Sidebar from "@/components/admin/Sidebar"
import Image from "next/image"

export default function Layout({
    children,
} : {
    children: React.ReactNode
}) {
    return <section>
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 px-12 border border-black">
                    <h3 className="font-medium">Admin Panel</h3>
                    <Image src={assets.blog_logo} width={80} alt="profile icon"/>
                </div>
                {children}
            </div>
        </div>
    </section>
}