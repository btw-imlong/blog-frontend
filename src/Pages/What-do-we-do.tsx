import { motion } from "framer-motion";
import { Lightbulb, Users, PenTool, BarChart4 } from "lucide-react";

const services = [
  {
    icon: <Lightbulb size={40} />,
    title: "Creative Content",
    description:
      "Empowering users to craft, edit, and share stunning blog posts with ease and style.",
  },
  {
    icon: <Users size={40} />,
    title: "Community Collaboration",
    description:
      "Collaborate with other creators, co-author stories, and grow together.",
  },
  {
    icon: <PenTool size={40} />,
    title: "Modern Tools",
    description:
      "We provide sleek, intuitive tools for writing, editing, and publishing in a few clicks.",
  },
  {
    icon: <BarChart4 size={40} />,
    title: "Smart Analytics",
    description:
      "Gain insight into your readers, performance, and growth with integrated analytics.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100 min-h-screen py-16 px-4">
      {/* Hero */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold mb-4 text-slate-800">What We Do</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We help creators, writers, and teams bring their ideas to life with
          beautiful tools and powerful features.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-slate-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">
          Ready to explore our features?
        </h2>
        <a
          href="/features"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Discover More
        </a>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
