import React from 'react';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO metadata
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import { motion } from 'framer-motion';  // Import Framer Motion

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Get accurate weather forecasts to plan your trips seamlessly and stay ahead of any surprises.',
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Explore destinations with experienced guides who ensure you don’t miss any hidden gems.',
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Personalize your trips with tailor-made itineraries designed to fit your preferences.',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        {/* SEO Metadata */}
        <title>Our Services - Prime Tours and Travels</title>
        <meta
          name="description"
          content="Explore our wide range of services including weather forecasts, best tour guides, and customized travel itineraries to enhance your travel experience."
        />
        <meta
          name="keywords"
          content="travel services, tour guide, weather forecast, trip customization, personalized tours"
        />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Our Services - Prime Tours and Travels" />
        <meta
          property="og:description"
          content="Explore our wide range of services including weather forecasts, best tour guides, and customized travel itineraries to enhance your travel experience."
        />
        <meta property="og:image" content="path_to_image_for_og_image" />
        <meta property="og:url" content="https://www.primetours.com/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Our Services - Prime Tours and Travels" />
        <meta
          name="twitter:description"
          content="Explore our wide range of services including weather forecasts, best tour guides, and customized travel itineraries to enhance your travel experience."
        />
        <meta name="twitter:image" content="path_to_image_for_twitter_image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="py-10 px-4 bg-gray-50">
        <div className="container mx-auto">
          {/* Section Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
            Our Services
          </h2>
          <p className="text-center text-gray-600 max-w-lg mx-auto mb-8">
            Experience exceptional services tailored to make your journeys memorable.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((item, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
                initial={{ opacity: 0, y: 20 }}  // Initial state
                animate={{ opacity: 1, y: 0 }}    // Animation when it comes into view
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}  // Staggered delay for each card
              >
                {/* Service Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="flex items-center justify-center rounded-full bg-yellow-400"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <img src={item.imgUrl} alt={item.title} className="w-2/3" />
                  </div>
                </div>

                {/* Service Title */}
                <h5 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h5>

                {/* Service Description */}
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
