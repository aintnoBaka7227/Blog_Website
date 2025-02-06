import { assets } from '@/asset/assets'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface BlogItemProps {
  mongoID: string | number;
  title: string;
  author_img: string | StaticImageData;
  author: string;
  date: Date;
  deleteBlog: (mongoID: string | number) => void;
}

const TableItems: React.FC<BlogItemProps> = ({ mongoID,author_img,title,author,date,deleteBlog }) => {
    const BlogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={author_img?author_img:assets.blog_logo} alt='author image' width={80} height={80}/>
            <p>{author?author:'no author'}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(mongoID)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default TableItems