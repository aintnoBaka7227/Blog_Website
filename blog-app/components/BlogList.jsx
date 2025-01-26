import React, { useState } from 'react'
import { blog_data } from '@/asset/assets'
import BlogItem from './BlogItem'

function BlogList() {
    const [menu, setMenu] = useState("All");

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu("All")} className={menu==="All" ? 'bg-black text-white py-1 px-4 rounded-sm':''}>All</button>
            <button onClick={()=>setMenu("Coding")} className={menu==="Coding" ? 'bg-black text-white py-1 px-4 rounded-sm':''}>Coding</button>
            <button onClick={()=>setMenu("Lifestyle")}  className={menu==="Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm':''}>Lifestyle</button>
            <button onClick={()=>setMenu("Anime")}  className={menu==="Anime" ? 'bg-black text-white py-1 px-4 rounded-sm':''}>Anime</button>
            <button onClick={()=>setMenu("Cooking")}  className={menu==="Cooking" ? 'bg-black text-white py-1 px-4 rounded-sm':''}>Cooking</button>
            <button onClick={()=>setMenu("Sport")}  className={menu==="Sport" ? 'bg-black text-white py-1 px-4 rounded-sm':''}>Sport</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=> menu==="All" ? true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList