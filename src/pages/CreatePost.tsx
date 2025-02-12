
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { createPost } from '../api';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleCreate = async (data: { title: string; content: string }) => {
    try {
      await createPost(data);
      navigate('/');
    } catch (error) {
      console.error("Failed to create post", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Create New Post</h1>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePost;
