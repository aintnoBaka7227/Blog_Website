'use client'
import { assets } from '@/asset/assets'
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
  }

  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <div className="mt-5 p-4 border border-black rounded-lg w-full max-w-xs mx-auto">
          <label htmlFor='image' className='cursor-pointer flex flex-col items-center justify-center'>
            <Image
              className='mt-4'
              src={image ? URL.createObjectURL(image) : assets.blog_logo}
              width={140}
              height={70}
              alt='Upload image button'
            />
            <span className='text-center mt-3'>
              {image ? 'Change image' : 'Add image'}
            </span>
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
      </form>
    </>
  )
}

export default Page
