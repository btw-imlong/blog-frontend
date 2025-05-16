import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100/50 to-white backdrop-blur-lg py-20 text-center px-4">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Blog Lines
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-gray-700 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering voices, sharing stories, and building a creative community
          for everyone.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/80 backdrop-blur-xl px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "🌍",
              title: "Global Voices",
              desc: "We bring together diverse voices from around the world.",
            },
            {
              icon: "✍️",
              title: "Creative Expression",
              desc: "A space for your ideas, freely and fearlessly.",
            },
            {
              icon: "🔒",
              title: "Privacy First",
              desc: "We respect and protect your content and data.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="p-6 bg-white/70 rounded-xl shadow-lg backdrop-blur-md"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50/80 backdrop-blur-md py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-10 text-center text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Our Journey
          </motion.h2>
          <ul className="space-y-8 border-l-4 border-blue-500 pl-6">
            {[
              {
                year: "2023",
                text: "Launched Blog Lines to give everyone a voice online.",
              },
              {
                year: "2024",
                text: "Reached 1000+ creative contributions across genres.",
              },
              {
                year: "Now",
                text: "Growing, evolving, and empowering the next generation of writers.",
              },
            ].map((item, i) => (
              <motion.li
                key={item.year}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-blue-600 font-semibold">{item.year}</div>
                <p className="text-gray-700">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "User-Friendly Interface",
              desc: "Built for both writers and readers with a clean experience.",
            },
            {
              title: "Secure & Private",
              desc: "Your data and identity are protected on our platform.",
            },
            {
              title: "Community Driven",
              desc: "Shaped by contributors from all walks of life.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-blue-100/60 p-6 rounded-xl shadow-md backdrop-blur-xl hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-200/60 to-blue-100/80 backdrop-blur-md text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Ready to explore stories?
        </h2>
        <p className="mb-6 text-gray-700">
          Join Blog Lines and share your voice with the world today.
        </p>
        <Link to="/register">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default About;
