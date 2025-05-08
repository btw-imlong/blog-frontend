import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ isLoggedIn = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo + Title */}
    <div className="flex items-center space-x-2">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-13 w-13 object-cover" />
        <span className="font-bold text-xl text-black">Blog Lines</span>
      </Link>
    </div>


      {/* Search Bar - Desktop */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full px-4 py-1.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link>

        {/* Dropdown Parent */}
        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-black">
            Pages <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="absolute hidden group-hover:block bg-white border mt-2 shadow-lg rounded-md py-2 min-w-[150px]">
            <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100">Dashboard</Link>
            <Link to="/create" className="block px-4 py-2 text-sm hover:bg-gray-100">Create Post</Link>
            <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
          </div>
        </div>

        <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-gray-500 hover:text-black">Login</Link>
            <Link to="/register" className="text-gray-500 hover:text-black">Register</Link>
          </>
        ) : (
          <button className="text-gray-500 hover:text-black">Sign out</button>
        )}
      </div>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t md:hidden flex flex-col px-4 py-4 space-y-3 shadow-md z-10">
          {/* Search Bar - Mobile */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full px-4 py-1.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          <Link to="/" className="text-gray-700">Home</Link>
          <Link to="/blog" className="text-gray-700">Blog</Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full text-gray-700"
            >
              Pages <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/dashboard" className="block text-sm text-gray-600">Dashboard</Link>
                <Link to="/create" className="block text-sm text-gray-600">Create Post</Link>
                <Link to="/profile" className="block text-sm text-gray-600">Profile</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-700">About</Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-gray-500">Login</Link>
              <Link to="/register" className="text-gray-500">Register</Link>
            </>
          ) : (
            <button className="text-gray-500">Sign out</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
