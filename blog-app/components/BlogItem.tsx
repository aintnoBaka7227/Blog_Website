import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface BlogItemProps {
  title: string;
  image: string | StaticImageData;
  category: string;
  description: string;
  id: string | number;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, image, category, description, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt="coding blog item" width={400} height={400} className="border border-black object-contain" />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-700">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700" dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
