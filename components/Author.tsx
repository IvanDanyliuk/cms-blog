import React from 'react';
import { IAuthor } from '../types';
import Image from 'next/image';


const Author: React.FC<IAuthor> = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image 
          src={author.photo.url}
          alt={author.name}
          width='100px'
          height='100px'
          unoptimized
          className='align-middle rounded-full'
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;