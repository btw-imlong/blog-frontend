import ModernButton from "../Components/modern-button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Picture1 from "../assets/Home1.png";
import Picture2 from "../assets/Home2.png";
import Card from "../Components/Card"

const Home = () => {
  const section2Ref = useRef(null);
  const isInView2 = useInView(section2Ref, { once: true });

  const section3Ref = useRef(null);
  const isInView3 = useInView(section3Ref, { once: true });


  return (
    <>
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white flex flex-col items-center justify-center py-24 md:py-36 lg:py-48 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${Picture1})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="container mx-auto px-4 text-center relative z-10 bg-black/50 p-4 rounded-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
          >
            Publish your passions, your way
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-gray-200 max-w-3xl mx-auto"
          >
            Create a unique and beautiful blog with our platform. Share your stories, your way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center"
          >
            <ModernButton text="CREATE YOUR BLOG" theme="primary" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        ref={section2Ref}
        initial={{ opacity: 0 }}
        animate={isInView2 ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="lg:h-[100vh] sm:h-[50vh] flex flex-col items-start justify-center py-24 md:py-36 lg:py-48 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${Picture2})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="container px-4 lg:px-32 relative z-10 text-black p-4 rounded-xl text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8"
          >
            Choose the perfect <br /> design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-black max-w-3xl"
          >
            Create a beautiful blog that fits your style. <br />
            Choose from a selection of easy-to-use <br />
            templates – all with flexible layouts and <br />
            hundreds of background images – or <br />
            design something new.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView2 ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <ModernButton text="CREATE YOUR BLOG" theme="secondary" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        ref={section3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-black px-4 lg:px-32 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
        >
          New Feed
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <Card />
          <Card />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView3 ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center mt-8"
        >
          <ModernButton text="See More" theme="secondary" />
        </motion.div>
      </motion.div>


    </>
  );
};

export default Home;
