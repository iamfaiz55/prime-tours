import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
      {/* Animated Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          className="w-full h-auto"
        >
          {/* Background Circle */}
          <circle cx="400" cy="300" r="250" fill="#E9F7EF" />
          {/* Globe Icon */}
          <circle cx="400" cy="300" r="120" fill="none" stroke="#34495E" strokeWidth="3" />
          <path
            d="M280 300 Q400 180 520 300 Q400 420 280 300"
            fill="none"
            stroke="#34495E"
            strokeWidth="3"
          />
          <line x1="400" y1="180" x2="400" y2="420" stroke="#34495E" strokeWidth="3" />
          {/* Airplane Icon */}
          <path
            d="M430 270 L470 280 L520 290 L500 300 L530 310 L480 320 L470 310 L430 320 Z"
            fill="#2196F3"
          />
        </svg>
      </motion.div>

      {/* Error Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          It seems you've reached a destination that doesn't exist. Let us guide you back to your journey.
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6"
      >
        <Link
          to="/"
          className="inline-block py-3 px-8 bg-blue-500 text-white font-semibold uppercase rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;