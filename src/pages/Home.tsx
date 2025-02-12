import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import PostList from '../components/postList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
