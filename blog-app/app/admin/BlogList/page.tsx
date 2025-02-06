'use client';
import TableItems from '@/components/admin/TableItems';
import axios from 'axios';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface Blog {
  title: string;
  author_img: string | StaticImageData;
  date: Date;
  author: string;
  _id: string | number;
  deleteBlog: (mongoID: string | number) => void;
}

function page() {

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    axios.get('http://localhost:3000/api/blog')
    .then(response => {
      setBlogs(response.data.blogs);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const deleteBlog = async (mongoID: string | number) => {
    axios.delete(`http://localhost:3000/api/blog`, {
      params: { mongoID },
    }) 
      .then(response => {
        console.log('Blog deleted successfully', response);
        toast.success(response.data.msg);
        fetchBlogs();
      })
      .catch(error => {
        console.error('Error deleting blog', error);
        toast.error("Error");
      });
  };
  

  useEffect(() => {
    fetchBlogs();
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-black'>
        <table className='w-full text-gray-700 text-sm bg-gray-500'>
          <thead className='text-sm bg-gray-50 text-left uppercase text-gray-700'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author name
              </th>
              <th scope='col' className='px-6 py-3'>
                Blog title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((items)=>{
              return <TableItems mongoID={items._id} key={items._id} title={items.title} author={items.author} author_img={items.author_img} date={items.date} deleteBlog={deleteBlog}/>
            })}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default page