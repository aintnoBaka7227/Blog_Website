'use client';
import React, { useEffect, useState } from 'react'
import { blog_data, assets } from '@/asset/assets'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import axios from 'axios';

interface PageProps {
    params: {
      id: string;
    };
}

function page({ params }:PageProps) {

    const [data, setData] = useState<null | (typeof blog_data)[0]>(null);

    const fetchBlogData = async () => {
        axios.get('http://localhost:3000/api/blog',{
            params: {
                id: params.id
            }
        })
        .then(response => {
            setData(response.data.blog);
            console.log(response.data);
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching blog data");
        });
    }

    useEffect(() => {fetchBlogData();}, []);

  return (data?<>
    <div className='bg-gray-300 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
                <Image src={assets.blog_logo} width={180} alt='logo' className='w-[140] sm:w-auto'/>
            </Link>
            <div className='flex gap-8'>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 hover:border hover:border-black hover:shadow-[-7px_7px_0px#000000]'>
                    Home
                </button>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px#000000]'>
                    Get started
                </button>
            </div>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl front-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' alt='profile pic' src={data.author_img} width={140} height={60}/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>        
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} width={1280} height={720} alt='image'/>
        <h2 className='my-8 text-[26px] font-semibold'>Introduction:</h2>
        <p>{data.description}</p>
        <br/>
        <div className='text-black font font-semibold my-4'>
            <p>Share this article on social media</p>
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook text-[20px]"/>
                <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram text-[20px]"/>
                <FontAwesomeIcon icon={faXTwitter} className="fa-brands fa-x-twitter text-[20px]"/>
                <FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin text-[20px]"/>
            </div>
        </div>
    </div>
    <Footer/>
    </>:<><p>Loading...</p></>
  )
}

export default page