'use client'
import { assets } from '@/asset/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [data,setData] = useState({
    title:'',
    description:'',
    category:'Coding',
    author:'Phong Tran',
    author_img:'/blog-logo.png'
  })
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}));
    //console.log(data);
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
  }

  const onSubmitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('author_img', data.author_img);
    if (image) {
      formData.append('image', image);
    } else {
      console.log("No image selected");
    }
    axios.post('http://localhost:3000/api/blog', formData)
    .then(response => {
      console.log(response.data);
      toast.success(response.data.msg);
      setImage(null);
      setData({
        title:'',
        description:'',
        category:'Coding',
        author:'Phong Tran',
        author_img:'/blog-logo.png'
      });
    })
    .catch(error => {
      toast.error("ERROR");
    })
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
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
        <p className='text-xl mt-6'>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value = {data.title} className='w-full sm:w-[800px] mt-4 px-4 py-3 border border-black' type='text' placeholder='Title here' required/>
        <p className='text-xl mt-6'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value = {data.description} className='w-full sm:w-[800px] mt-4 px-4 py-3 border border-black ' placeholder='Description here' rows={6} required/>
        <p className='text-xl mt-6'>Select Tag</p>
        <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value='Coding'>Coding</option>
          <option value='Lifestyle'>Lifestyle</option>
          <option value='Anime'>Anime</option>
          <option value='Cooking'>Cooking</option>
          <option value='Sport'>Sport</option>
        </select>
        <br/>
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>ADD</button>
      </form>
    </>
  )
}

export default Page
