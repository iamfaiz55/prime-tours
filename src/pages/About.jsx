import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO metadata
import logo from './../assets/images/logo5.png';

const About = () => {
  return (
    <>
      {/* Helmet for SEO Metadata */}
      <Helmet>
        <title>About Prime Tours and Travels | Best Travel Experience</title>
        <meta
          name="description"
          content="Prime Tours and Travels offers exceptional travel experiences across Maharashtra and beyond. Discover personalized travel packages, car rentals, and guided tours with us."
        />
        <meta
          name="keywords"
          content="Prime Tours, tours, travel agency, best travel experience, Maharashtra tours, car rental, personalized travel, travel packages"
        />
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="About Prime Tours and Travels | Best Travel Experience" />
        <meta
          property="og:description"
          content="Prime Tours and Travels offers exceptional travel experiences across Maharashtra and beyond. Discover personalized travel packages, car rentals, and guided tours with us."
        />
        <meta property="og:image" content="path_to_image_for_og_image" />
        <meta property="og:url" content="https://www.primetours.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="About Prime Tours and Travels | Best Travel Experience" />
        <meta
          name="twitter:description"
          content="Prime Tours and Travels offers exceptional travel experiences across Maharashtra and beyond. Discover personalized travel packages, car rentals, and guided tours with us."
        />
        <meta name="twitter:image" content="path_to_image_for_twitter_image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Prime Tours and Travels
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Established in 2020, Prime Tours and Travels has been dedicated to providing the most affordable and memorable travel experiences across Maharashtra and beyond. With a focus on customer satisfaction, we pride ourselves on delivering excellent service at unbeatable prices.
            </p>
          </motion.div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Background --> */}
                <rect width="500" height="300" fill="#ffffff"/>
                
                {/* <!-- Airplane Icon --> */}
                <path d="M380 140 L340 160 L300 160 L240 180 L220 180 L260 160 L240 160 L200 170 L180 170 L220 150 L200 150 L180 155 L160 155 L200 140 L160 130 L180 125 L200 125 L220 130 L240 120 L260 120 L220 100 L240 100 L300 120 L340 120 Z" fill="#2196F3"/>
                
                {/* <!-- Globe Icon --> */}
                <circle cx="160" cy="140" r="30" fill="none" stroke="#34495E" stroke-width="2"/>
                <path d="M130 140 Q160 110 190 140 Q160 170 130 140" fill="none" stroke="#34495E" stroke-width="2"/>
                <line x1="160" y1="110" x2="160" y2="170" stroke="#34495E" stroke-width="2"/>
                
                {/* <!-- Text --> */}
                <text x="250" y="220" font-family="Arial, sans-serif" font-size="40" font-weight="bold" text-anchor="middle" fill="#34495E">
                  TOURS
                </text>
                <text x="250" y="260" font-family="Arial, sans-serif" font-size="40" font-weight="bold" text-anchor="middle" fill="#2196F3">
                  & TRAVELS
                </text>
              </svg>
              <motion.div
                className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-2 rounded-br-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Since 2020
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-600 mb-4">
                At Prime Tours and Travels, we go the extra mile to make your trips enjoyable, hassle-free, and affordable. Whether you're planning a family vacation, a weekend getaway, or a business trip, we provide tailored packages and reliable transport options that suit your needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-yellow-500 text-xl mr-3"></i> Affordable tour packages for all budgets.
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-yellow-500 text-xl mr-3"></i> Experienced and friendly tour guides.
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-yellow-500 text-xl mr-3"></i> Reliable car rental services at competitive rates.
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-yellow-500 text-xl mr-3"></i> Tailored itineraries for personalized travel experiences.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-700 text-lg mb-4">
              Let us plan your next journey. Experience the best of travel with Prime Tours and Travels!
            </p>
            <a
              href="tel:+919960669724"
              className="inline-block py-3 px-8 bg-yellow-500 text-white font-semibold uppercase rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:shadow-lg"
            >
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
