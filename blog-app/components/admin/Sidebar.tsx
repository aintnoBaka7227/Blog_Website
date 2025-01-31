import { assets } from '@/asset/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.blog_logo} alt='logo pic' width={80}/>
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w-[50%] sm:w-[80%] absolute right-0'>
                <Link href='/admin/addBlog' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bog-white shadow-[-7px_7px_0px_#000000]'>
                    <Image src={assets.blog_logo} alt='add blog button' width={28}/><p>Add blogs</p>
                </Link>
                <Link href='/admin/BlogList' className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bog-white shadow-[-7px_7px_0px_#000000]'>
                    <Image src={assets.blog_logo} alt='add blog button' width={28}/><p>Blog list</p>
                </Link>
                <Link href='/admin/subscription' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bog-white shadow-[-7px_7px_0px_#000000]'>
                    <Image src={assets.blog_logo} alt='add blog button' width={28}/><p>Subscription</p>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar