import React from 'react';
import { Helmet } from 'react-helmet-async';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import { motion } from 'framer-motion';

// Define types
interface ServiceItem {
  imgUrl: string;
  title: string;
  desc: string;
}

const servicesData: ServiceItem[] = [
  {
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Get accurate weather forecasts to plan your trips seamlessly and stay ahead of any surprises.',
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Explore destinations with experienced guides who ensure you don\'t miss any hidden gems.',
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Personalize your trips with tailor-made itineraries designed to fit your preferences.',
  },
];

const Services: React.FC = () => {
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

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
              Our Services
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Experience exceptional services tailored to make your journeys memorable.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
              <motion.div
                key={index}
                className="group border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2, 
                  type: 'spring', 
                  stiffness: 100,
                  duration: 0.6
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                {/* Service Icon */}
                <motion.div 
                  className="flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
                    style={{ width: '100px', height: '100px' }}
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                      scale: 1.05
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img 
                      src={item.imgUrl} 
                      alt={item.title} 
                      className="w-2/3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Service Title */}
                <motion.h5 
                  className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h5>

                {/* Service Description */}
                <motion.p 
                  className="text-sm md:text-base text-gray-600 text-center leading-relaxed px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.desc}
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;