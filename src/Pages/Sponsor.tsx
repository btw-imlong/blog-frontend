import { motion } from "framer-motion";
import Creativetab from "../assets/creativelab.png";
import TechWorld from "../assets/techworld.png";
import OpenSource from "../assets/opensource.png";

type Tier = "Gold" | "Silver" | "Bronze";

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier: Tier;
  description: string;
}

const sponsors: Sponsor[] = [
  {
    name: "TechWorld Inc.",
    logo: TechWorld,
    url: "https://learnteachworld.com/index.html",
    tier: "Gold",
    description: "Innovating future tech solutions.",
  },
  {
    name: "Creative Labs",
    logo: Creativetab,
    url: "https://us.creative.com/",
    tier: "Silver",
    description: "Empowering design and creativity.",
  },
  {
    name: "OpenSource Heroes",
    logo: OpenSource,
    url: "https://opensource.org/",
    tier: "Bronze",
    description: "Supporters of open collaboration.",
  },
];

const tierStyles: Record<Tier, string> = {
  Gold: "bg-yellow-100 border-yellow-400 text-yellow-800",
  Silver: "bg-gray-100 border-gray-400 text-gray-800",
  Bronze: "bg-orange-100 border-orange-400 text-orange-800",
};

const SponsorPage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 min-h-screen">
      {/* Hero */}
      <motion.section
        className="text-center py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Our Amazing Sponsors</h1>
        <p className="text-lg max-w-xl mx-auto">
          These partners help us grow and innovate. We’re thankful for their
          trust.
        </p>
      </motion.section>

      {/* Sponsor Tiers */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meet Our Sponsors
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {sponsors.map((sponsor, idx) => (
            <motion.a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className={`rounded-xl shadow-lg border-2 p-6 text-center hover:scale-105 transform transition duration-300 ${
                tierStyles[sponsor.tier]
              }`}
              whileHover={{ rotate: -1 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-50 h-24 mx-auto object-contain mb-4"
              />
              <h3 className="text-xl font-bold">{sponsor.name}</h3>
              <p className="text-sm italic mb-2">{sponsor.description}</p>
              <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold rounded-full bg-white bg-opacity-40 backdrop-blur border">
                {sponsor.tier} Sponsor
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="bg-indigo-700 text-white text-center py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Want to Join?</h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Let’s build something meaningful together. Become part of our journey.
        </p>
        <a
          href="/contact"
          className="bg-gradient-to-r from-yellow-400 to-pink-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
        >
          Become a Sponsor
        </a>
      </motion.section>
    </div>
  );
};

export default SponsorPage;
