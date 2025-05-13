import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const profilePic = "https://i.pravatar.cc/40";

const Navbar = ({ isLoggedIn = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const profileLinks = [
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Blogs", path: "/my-blogs" },
    { name: "Saved Posts", path: "/saved-posts" },
    { name: "Notifications", path: "/notifications" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-13 w-13 object-cover" />
          <span className="font-bold text-xl text-black">Blog Lines</span>
        </Link>
      </div>

      {/* Search - Desktop */}
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
        <Link to="/about" className="text-gray-700 hover:text-black">About</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="text-gray-500 hover:text-black">Login</Link>
            <Link to="/register" className="text-gray-500 hover:text-black">Register</Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-black"
            >
              <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-black text-white border shadow-lg rounded-lg py-4 px-4 z-50 space-y-3">
                {profileLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    className="block text-lg rounded-md px-2 py-2 transition-all duration-200 hover:bg-gray-900 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="block w-full text-left text-lg text-red-400 rounded-md px-2 py-2 transition-all duration-200 hover:bg-gray-900 hover:text-red-300">
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t md:hidden flex flex-col px-4 py-4 space-y-3 shadow-md z-10">
          {/* Search - Mobile */}
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
                <Link to="/my-blogs" className="block text-sm text-gray-600">My Blogs</Link>
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
            <div className="mt-3">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700"
              >
                <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                <span>Profile</span>
              </button>
              {profileDropdownOpen && (
                <div className="mt-3 bg-black text-white rounded-lg px-4 py-4 space-y-3">
                  {profileLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.path}
                      className="block text-lg rounded-md px-2 py-2 transition-all duration-200 hover:bg-gray-900 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <button className="block w-full text-left text-lg text-red-400 rounded-md px-2 py-2 transition-all duration-200 hover:bg-gray-900 hover:text-red-300">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
