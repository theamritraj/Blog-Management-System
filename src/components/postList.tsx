import { Link } from 'react-router-dom';

interface PostListProps {
  posts: { id: number; title: string; content: string }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-4">
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/post/${post.id}`} className="text-blue-600">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
