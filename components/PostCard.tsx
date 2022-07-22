import React from 'react';
import { IPostCard } from '../types';


const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard