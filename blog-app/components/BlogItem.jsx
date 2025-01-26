import React from 'react'
import Image from 'next/image'

function BlogItem({ title,image,category,description }) {
  return (
    <div className='max-w-[330] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Image src={image} alt='coding blog item' width={400} height={400} className='border border-black'/>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white test-sm'>{category}</p>
        <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-700'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
            <div className='inline-flex items-center py-2 font-semibold text-center'>
                Read more
            </div>
        </div>
    </div>
  )
}

export default BlogItem