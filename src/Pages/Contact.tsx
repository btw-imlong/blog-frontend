import Button from "../Components/modern-button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white p-6">
      {/* Animated Illustration/Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mb-10 md:mb-0 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Talk 👋</h1>
        <p className="text-lg md:text-xl">
          We’d love to hear from you! Fill in the form and we’ll be in touch.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-full md:w-1/2 max-w-lg"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            rows={4}
            placeholder="Your message here..."
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>
        <Button
          text="Send Message"
          size="lg"
          theme="primary"
          onClick={() => alert("Message Sent!")}
        />
      </motion.form>
    </div>
  );
}
