import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-20 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your privacy matters. Learn how we handle your data responsibly.
        </p>
      </motion.section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        {[
          {
            title: "1. Introduction",
            text: "We are committed to safeguarding your privacy. This policy explains how we collect, use, and protect your personal data when you use our website.",
          },
          {
            title: "2. Information We Collect",
            text: "We may collect personal information (like your name and email), browser data, IP addresses, and usage data via cookies and analytics tools.",
          },
          {
            title: "3. Use of Your Information",
            text: "We use your data to improve user experience, deliver services, communicate with you, and ensure site security.",
          },
          {
            title: "4. Sharing Your Information",
            text: "We do not sell your data. We may share it with trusted third-party services (like Google Analytics) or to comply with legal requirements.",
          },
          {
            title: "5. Cookies & Tracking",
            text: "We use cookies to enhance your browsing experience. You can adjust your browser settings to decline cookies if you prefer.",
          },
          {
            title: "6. Your Rights",
            text: "You have the right to access, update, or delete your personal information and opt out of marketing communications.",
          },
          {
            title: "7. Third-Party Links",
            text: "Our site may contain links to external sites. We are not responsible for their content or privacy practices.",
          },
          {
            title: "8. Policy Updates",
            text: "We may update this policy periodically. We encourage you to review it regularly.",
          },
          {
            title: "9. Contact Us",
            text: "If you have any questions about this privacy policy, contact us at privacy@example.com.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default PrivacyPolicy;
