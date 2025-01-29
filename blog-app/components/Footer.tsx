import React from 'react'
import Image from 'next/image'
import { assets } from '@/asset/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <div>
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.blog_logo} alt='blog logo' width={120}/>
            <p className='text-sm text-white text-center'>All rights reserved. Copyright @Blog 2025.</p>
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook text-white text-[20px]"/>
                <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram text-white text-[20px]"/>
                <FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter text-white text-[20px]"/>
                <FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin text-white text-[20px]"/>
            </div>
        </div>
    </div>
  )
}

export default Footer