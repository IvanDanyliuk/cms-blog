import type { NextPage } from 'next';
import { PostCard, PostWidget, Categories } from '../components';
import { FeaturedPosts } from '../sections';
import { getPosts } from '../services';
import { IHome } from '../types';


const Home: NextPage<IHome> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className='grid grid-cols lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, i) => <PostCard key={i} post={post.node} />)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  };
};

export default Home;