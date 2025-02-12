import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (post: { title: string; content: string }) => {
  await api.post('/posts', post);
};

export const updatePost = async (id: number, post: { title: string; content: string }) => {
  await api.put(`/posts/${id}`, post);
};

export const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};
