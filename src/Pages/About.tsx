import { Link } from "react-router";
const AboutUs = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About ISI Tech Solutions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We craft innovative, full-stack web solutions that empower brands to
          grow digitally. Our passion for performance, design, and scalable
          development drives everything we do.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white text-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto">
          To build seamless digital experiences for users through reliable,
          modern, and scalable tech.
        </p>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Our Vision</h2>
        <p className="max-w-3xl mx-auto">
          To be a leading web solution provider in Southeast Asia by empowering
          developers and businesses with cutting-edge technologies.
        </p>
      </section>

      {/* Timeline Animation */}
      <section className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <ol className="border-l-4 border-indigo-500 pl-6  space-y-10">
          <li className="relative ml-4">
            <div className="absolute -left-8 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
            <span className="text-indigo-500 font-semibold">2023:</span> ISI
            Tech Solutions was founded by passionate developers.
          </li>
          <li className="relative ml-4">
            <div className="absolute -left-8 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
            <span className="text-indigo-500 font-semibold">2024:</span>{" "}
            Delivered multiple client projects, and launched our in-house blog
            CMS.
          </li>
          <li className="relative ml-4">
            <div className="absolute -left-8 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
            <span className="text-indigo-500 font-semibold">2025:</span>{" "}
            Expanded into full-stack solutions with React + Strapi + PostgreSQL.
          </li>
        </ol>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-tr from-pink-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-1">Sovanden Sarim</h3>
            <p className="text-sm">Full Stack Developer</p>
          </div>
          <div className="bg-gradient-to-tr from-blue-500 to-teal-400 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-1">Phone Nikev</h3>
            <p className="text-sm">Frontend Developer</p>
          </div>
          <div className="bg-gradient-to-tr from-yellow-400 to-pink-500 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-1">Chantha Makara</h3>
            <p className="text-sm">Backend Engineer</p>
          </div>
          <div className="bg-gradient-to-tr from-green-400 to-blue-500 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-1">Phan Cheanlong </h3>
            <p className="text-sm">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Work with Us?</h2>
        <p className="mb-6">
          Let’s build something amazing together. Check out our blog or contact
          us for collaboration opportunities.
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
