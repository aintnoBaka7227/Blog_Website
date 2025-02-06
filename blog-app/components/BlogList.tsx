import React, { useState } from 'react'
import { blog_data } from '@/asset/assets'
import BlogItem from './BlogItem'

function BlogList() {
    const [menu, setMenu] = useState("All");

    const buttonClass = (category:string) => 
        `py-1 px-4 rounded-sm transition-all duration-300 ease-in-out transform 
        ${menu === category ? 'bg-black text-white scale-105' : 'bg-white text-gray-700 hover:bg-black hover:text-white hover:scale-105'}`;

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
        <div className='flex flex-wrap justify-center gap-6 my-10'>
            {["All", "Coding", "Lifestyle", "Anime", "Cooking", "Sport"].map((category) => (
                <button
                    key={category}
                    onClick={() => setMenu(category)}
                    className={buttonClass(category)}
                >
                    {category}
                </button>
            ))}
        </div>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=> menu==="All" ? true:item.category===menu).map((item,index)=>{
                return <BlogItem id={item.id} key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList