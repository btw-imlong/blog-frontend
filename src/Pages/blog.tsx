import { motion } from "framer-motion";
import Card from "../Components/Card";
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

      {/* Our Blog Section */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-1xl mx-auto px-2 text-center">
          <h2 className="text-2xl font-bold mt-2">Our Blog</h2>
          <Card />
          <Card />
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
      </motion.section>
    </div>
  );
};

export default BlogPage;
