import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">BLOG LINES</h2>
            <p className="mt-1">Write. Share. Inspire.</p>
            <nav className="mt-6 py-2 border-t-2 w-3xs flex space-x-6 text-sm font-medium">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link to="blog" className="hover:text-blue-500">
                Blog
              </Link>
              <Link to="sponser" className="hover:text-blue-500">
                Sponser
              </Link>
            </nav>
          </div>

          <div className="flex flex-col justify-start">
            <p className="mt-6 font-semibold text-lg">
              Can You Put Your Email Here?
            </p>
            <div className="mt-2 flex w-full max-w-md">
              <input
                type="email"
                placeholder="Write Email Here"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-r-md cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-2 md:mb-0">
              <Link to="privacy" className="hover:text-red-500">
                Privacy Policy
              </Link>
              <span className="text-red-500">|</span>
              <Link to="about" className="hover:text-red-500">
                Our History
              </Link>
              <span className="text-red-500">|</span>
              <Link to="contact" className="hover:text-red-500">
                Contact Us
              </Link>
              <span className="text-red-500">|</span>
              <Link to="What-we-do" className="hover:text-red-500">
                What We Do?
              </Link>
            </div>
            <p className="text-gray-400">
              © 2025 Your Blog Lines. All images are for demonstration purposes
              only. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
