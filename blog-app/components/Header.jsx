import React from 'react'
import Image from 'next/image'
import { assets } from '@/asset/assets'

function Header() {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.blog_logo} width={180} alt='logo' className='w-[140] sm:w-auto'/>
            <div className='flex gap-8'>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6'>
                    Home
                </button>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px#000000]'>
                    Get started
                </button>
            </div>
        </div>
        <div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='justify-between mt-10 max-w-[740] m-auto text-xs sm:text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. asdfasdf
                dafafasdfasdfasdfasdfasdfasfdasdfafdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                dafsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfadsfasdfasdfasdfasdfasdfasdfasfdasdfasdfasdfasdfdsfasdfasfds
                </p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px#000000]' action=''>
                    <input type='email' placeholder='Enter your email' className='pl-4 outline-none'></input>
                    <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Header