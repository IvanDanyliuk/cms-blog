import React from 'react';

interface IPostCard {
  post: {
    title: string;
    excerpt: string;
  }
};

const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard