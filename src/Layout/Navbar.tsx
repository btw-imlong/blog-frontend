import { useEffect, useRef, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ModernButton from "../Components/modern-button";

type UserType = { username: string; profilePic: string | null };

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /* ------------------------  helpers ------------------------ */
  const syncUser = () => {
    const raw = localStorage.getItem("user");
    setUser(raw ? (JSON.parse(raw) as UserType) : null);
  };

  /* ------------------------  mount / storage / custom event listeners ------------------------ */
  useEffect(syncUser, []); // initial load

  useEffect(() => {
    const handleStorage = () => syncUser(); // for other tabs
    const handleUserUpdated = () => syncUser(); // for this tab

    window.addEventListener("storage", handleStorage);
    window.addEventListener("userUpdated", handleUserUpdated);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("userUpdated", handleUserUpdated);
    };
  }, []);

  /* ------------------------  close dropdown when clicking outside ------------------------ */
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [dropdownOpen]);

  /* ------------------------  logout ------------------------ */
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    localStorage.removeItem("profilePic");
    setUser(null);
    window.dispatchEvent(new Event("userUpdated")); // keep other tabs in sync
    navigate("/login");
  };

  /* ------------------------  avatar src & element ------------------------ */
  const avatarSrc =
    user?.profilePic ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.username ?? "U"
    )}&background=random`;

  const Avatar = (
    <img
      src={avatarSrc}
      alt="avatar"
      className="h-8 w-8 rounded-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 shadow-sm"
      onClick={() => setDropdownOpen(!dropdownOpen)}
    />
  );

  /* ========================================================= */
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
      {/* ---------- logo ---------- */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-12 w-12 object-cover" />
        <span className="text-xl font-bold text-black">Blog Lines</span>
      </Link>

      {/* ---------- desktop search ---------- */}
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

      {/* ---------- desktop links & avatar ---------- */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-black">
          Home
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-black">
          Blog
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-black">
          About
        </Link>

        {!user ? (
          <div className="flex items-center gap-4 ml-auto">
            <span
              className="text-gray-700 hover:text-black cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
            <ModernButton
              text="Login"
              size="md"
              theme="primary"
              onClick={() => navigate("/login")}
            />
          </div>
        ) : (
          <div className="relative ml-4" ref={dropdownRef}>
            {Avatar}
            {/* ---------- dropdown ---------- */}
            <div
              className={`absolute right-0 mt-10 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-200 ease-out origin-top-right
                ${
                  dropdownOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                }`}
            >
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/create-post"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Create Post
              </Link>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ---------- mobile hamburger ---------- */}
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ---------- mobile slide-down menu ---------- */}
      <div
        className={`absolute top-16 left-0 w-full bg-white border-t md:hidden flex flex-col px-4 py-4 gap-3 shadow-md transition-transform duration-200 z-40
          ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
      >
        <Link
          to="/"
          className="text-gray-700"
          onClick={() => setMobileOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="text-gray-700"
          onClick={() => setMobileOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="text-gray-700"
          onClick={() => setMobileOpen(false)}
        >
          About
        </Link>

        {!user ? (
          <>
            <span
              className="text-gray-700"
              onClick={() => {
                navigate("/register");
                setMobileOpen(false);
              }}
            >
              Register
            </span>
            <ModernButton
              text="Login"
              size="md"
              theme="primary"
              onClick={() => {
                navigate("/login");
                setMobileOpen(false);
              }}
            />
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/create-post"
              className="text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Create Post
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setMobileOpen(false);
              }}
              className="text-red-600 text-left"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
