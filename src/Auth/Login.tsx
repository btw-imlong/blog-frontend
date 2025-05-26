// Login.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ModernButton from "../Components/modern-button";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email, // Strapi uses 'identifier' for email/username
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login success!", data);
        localStorage.setItem("jwt", data.jwt); // Save JWT token
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user info
        navigate("/"); // Redirect to home page
      } else {
        console.error("Login failed:", data);
        alert(data.error?.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <ModernButton
            text={loading ? "Logging in..." : "Login"}
            loading={loading}
            disabled={loading}
            onClick={() => {}} // onClick not needed since form handles submit
            size="md"
            theme="primary"
          />
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 font-medium hover:underline"
          >
            Register here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
