import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between">
        <Link to="/" className="text-xl">Blog Management</Link>
        <Link to="/create" className="text-blue-300">Create Post</Link>
      </nav>
    </header>
  );
};

export default Header;
