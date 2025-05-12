import { motion } from "framer-motion";
import Card from "../Components/Card";
import pic1 from "../assets/pic1.jpg";
import blog1 from "../assets/blog1.jpg";
import blog6 from "../assets/blog6.jpg";
import ModernButton from "../Components/modern-button";

const BlogPage = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="bg-gray-800 text-white py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">High-Converting Landing Page</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex justify-center gap-4">
            <ModernButton text="Learn More🧾" />
          </div>
        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Value Proposition</h3>
            <p className="mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority...
            </p>
            <div className="flex gap-8 text-sm">
            <div className="space-y-2">
            <p className="font-bold">Description</p>
            <ModernButton text="Explore One" />
            </div>
            <div className="space-y-2">
           <p className="font-bold">Description</p>
           <ModernButton text="Explore Two" />
          </div>
          </div>

          </div>
          <motion.div
            className="bg-gray-200 h-64 rounded-md flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={blog1} alt="Value Proposition" />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="bg-gray-800 text-white py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <p>There are many variations of passages of Lorem Ipsum available...</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              className="bg-gray-700 h-48 flex items-center justify-center rounded-md"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={blog6}
                alt="Feature Image"
                className="w-full md:w-[640px] h-48 object-cover rounded-md 
                transform transition-transform duration-300 
                hover:scale-105 hover:shadow-xl"
              />

            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <ModernButton text="Feature 1 🌟" />
              <ModernButton text="Feature 2 🌟" />
              <ModernButton text="Feature 3 🌟" />
              <ModernButton text="Feature 4 🌟" />
              <ModernButton text="Feature 5 🌟" />
              <ModernButton text="Feature 6 🌟" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Blog Section */}
      <motion.section
        className="py-5 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-1xl mx-auto px-2 text-center">
          <h2 className="text-2xl font-bold mt-6">Our Blog</h2>
          <Card />
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction Materials</h3>
            <p>
              Detailed explanation and value of using your blog platform or company service...
            </p>
          </div>
          <motion.div
            className="h-64 bg-gray-200 rounded-md flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <img
            className="w-3xl h-[300px] object-cover rounded-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
            src={pic1}
            alt="Introduction"
            />

          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPage;
