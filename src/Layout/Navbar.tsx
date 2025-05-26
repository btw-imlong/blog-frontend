import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ModernButton from "../Components/modern-button"; // Adjust the path as needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <Link to="/" className="text-gray-700 hover:text-black">
          Home
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-black">
          Blog
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-black">
          About
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-black">
          Register
        </Link>

        <div className="ml-6">
          <ModernButton
            text="Login"
            size="md"
            theme="primary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>

      {/* Hamburger - Mobile */}
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

          <Link to="/" className="text-gray-700">
            Home
          </Link>
          <Link to="/blog" className="text-gray-700">
            Blog
          </Link>
          <Link to="/about" className="text-gray-700">
            About
          </Link>
          <Link to="/register" className="text-gray-700">
            Register
          </Link>

          <ModernButton
            text="Login"
            size="md"
            theme="primary"
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
