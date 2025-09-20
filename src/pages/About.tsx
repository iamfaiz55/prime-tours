import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      {/* Helmet for SEO Metadata */}
      <Helmet>
        <title>About Prime Tours & Travels Aurangabad | Best Travel Agency Chhatrapati Sambhaji Nagar</title>
        <meta
          name="description"
          content="Learn about Prime Tours & Travels - #1 travel agency in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Professional taxi services, car rentals, and tour packages for Ajanta Ellora, Daulatabad Fort. 12k+ successful trips!"
        />
        <meta
          name="keywords"
          content="about prime tours aurangabad, travel agency aurangabad, chhatrapati sambhaji nagar travel agency, best tours and travels aurangabad, professional taxi service aurangabad, car rental aurangabad, ajanta ellora tours, daulatabad fort tours, maharashtra travel agency, experienced travel company aurangabad"
        />
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="About Prime Tours & Travels Aurangabad | Best Travel Agency Chhatrapati Sambhaji Nagar" />
        <meta
          property="og:description"
          content="Learn about Prime Tours & Travels - #1 travel agency in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Professional taxi services, car rentals, and tour packages for Ajanta Ellora, Daulatabad Fort. 12k+ successful trips!"
        />
        <meta property="og:image" content="https://www.primetours.com/images/about-prime-tours-aurangabad.jpg" />
        <meta property="og:url" content="https://www.primetours.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prime Tours and Travels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Prime Tours & Travels Aurangabad | Best Travel Agency Chhatrapati Sambhaji Nagar" />
        <meta
          name="twitter:description"
          content="Learn about Prime Tours & Travels - #1 travel agency in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Professional taxi services, car rentals, and tour packages for Ajanta Ellora, Daulatabad Fort. 12k+ successful trips!"
        />
        <meta name="twitter:image" content="https://www.primetours.com/images/about-prime-tours-aurangabad.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Prime Tours and Travels" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Aurangabad, Maharashtra, India" />
        <link rel="canonical" href="https://www.primetours.com/about" />
        
        {/* Structured Data - About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Prime Tours and Travels",
            "description": "Learn about Prime Tours & Travels - #1 travel agency in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Professional taxi services, car rentals, and tour packages.",
            "url": "https://www.primetours.com/about",
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "Prime Tours and Travels",
              "description": "Best Tours & Travels in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Professional taxi services, car rentals, and tour packages for Ajanta Ellora, Daulatabad Fort.",
              "telephone": "+919960669724",
              "email": "info@primetours.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aurangabad",
                "addressRegion": "Maharashtra",
                "postalCode": "431001",
                "addressCountry": "IN"
              },
              "foundingDate": "2020",
              "numberOfEmployees": "10-50",
              "areaServed": "Aurangabad, Maharashtra, India"
            }
          })}
        </script>
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
                {/* Background */}
                <rect width="500" height="300" fill="#ffffff"/>
                
                {/* Airplane Icon */}
                <path d="M380 140 L340 160 L300 160 L240 180 L220 180 L260 160 L240 160 L200 170 L180 170 L220 150 L200 150 L180 155 L160 155 L200 140 L160 130 L180 125 L200 125 L220 130 L240 120 L260 120 L220 100 L240 100 L300 120 L340 120 Z" fill="#3B82F6"/>
                
                {/* Globe Icon */}
                <circle cx="160" cy="140" r="30" fill="none" stroke="#34495E" strokeWidth="2"/>
                <path d="M130 140 Q160 110 190 140 Q160 170 130 140" fill="none" stroke="#34495E" strokeWidth="2"/>
                <line x1="160" y1="110" x2="160" y2="170" stroke="#34495E" strokeWidth="2"/>
                
                {/* Text */}
                <text x="250" y="220" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#34495E">
                  TOURS
                </text>
                <text x="250" y="260" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#3B82F6">
                  & TRAVELS
                </text>
              </svg>
              <motion.div
                className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-2 rounded-br-lg"
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
                  <i className="ri-checkbox-circle-line text-blue-500 text-xl mr-3"></i> Affordable tour packages for all budgets.
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-blue-500 text-xl mr-3"></i> Experienced and friendly tour guides.
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-blue-500 text-xl mr-3"></i> Reliable car rental services at competitive rates.
                </li>
                <li className="flex items-center">
                  <i className="ri-checkbox-circle-line text-blue-500 text-xl mr-3"></i> Tailored itineraries for personalized travel experiences.
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
              className="inline-block py-3 px-8 bg-blue-500 text-white font-semibold uppercase rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg"
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