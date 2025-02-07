import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';
import { StaticImageData } from 'next/image';

interface Blog {
  title: string;
  image: string | StaticImageData;
  category: string;
  description: string;
  _id: string | number;
}

function BlogList() {
    const [menu, setMenu] = useState("All");
    const [blogs,setBlogs] = useState<Blog[]>([]);

    const fetchBlogs = async () => {
        axios.get('http://localhost:3000/api/blog')
        .then(response => {
            setBlogs(response.data.blogs)
            console.log(response.data.blogs);
        })
        .catch(error => {
            console.error("ERROR fetching");
        })
    }
    
    useEffect(() =>{
        fetchBlogs();
    }, []); 

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
            {blogs.filter((item)=> menu==="All" ? true:item.category===menu).map((item)=>{
                return <BlogItem id={item._id} key={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList