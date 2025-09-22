import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
// import maqbara from '../assets/maqbara.jpeg';
import elora from '../assets/elora.jpeg';
import ajanta from '../assets/ajanta.jpeg';
import daulatabad from '../assets/daulatabad.jpeg';
import city from '../assets/images/city.jpg';
import panch from '../assets/images/panchavatiNashik.jpg';
import shani from '../assets/images/shani.jpg';
import mumbai from '../assets/images/mumbai.jpeg';
import pune from '../assets/images/pune.jpg';
import panchakki from '../assets/images/panchakki.jpeg';

const TourList: React.FC = React.memo(() => {
  const featuredTours = useMemo(() => [
    {
      _id: '1',
      title: 'Elora Caves',
      city: 'Aurangabad',
      photo: elora,
      price: 500,
      featured: true,
    },
    {
      _id: '2',
      title: 'Historical Tour Daulatabad And Khuldabad',
      city: 'Aurangabad',
      photo: daulatabad,
      featured: false,
    },
    {
      _id: '3',
      title: 'Ajanta Caves',
      city: 'Aurangabad',
      photo: ajanta,
      featured: true,
    },
    {
      _id: '4',
      title: 'Local Signtseeing',
      city: 'Aurangabad',
      photo: city,
      featured: true,
    },
    {
      _id: '5',
      title: 'Panchwati',
      city: 'Nashik',
      photo: panch,
      featured: true,
    },
    {
      _id: '6',
      title: 'Shani Shingnapur',
      city: 'Ahmadnagar',
      photo: shani,
      featured: true,
    },
    {
      _id: '7',
      title: 'Mumbai',
      city: 'Maharashtra',
      photo: mumbai,
      featured: true,
    },
    {
      _id: '8',
      title: 'Pune',
      city: 'Maharashtra',
      photo: pune,
      featured: true,
    },
    {
      _id: '9',
      title: 'Panchakki',
      city: 'Aurangabad',
      photo: panchakki,
      featured: true,
    },
  ], []);

  const handleBookNow = useCallback((tourId: string) => {
    // This will be handled by parent component or context
    console.log('Book now clicked for tour:', tourId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {featuredTours.map((tour, index) => (
          <motion.div
            key={tour._id}
            className="mb-4"
            variants={itemVariants}
          >
            <div className="tour_card shadow-lg border border-transparent rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative">
                <OptimizedImage
                  src={tour.photo}
                  alt={tour.title}
                  className="w-full h-48"
                  priority={index < 3} // Load first 3 images with priority
                />
                {tour.featured && (
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-black py-1 px-2 rounded-bl-lg text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <i className="ri-map-pin-line"></i> {tour.city}
                  </span>
                </div>
                <h5 className="mt-3 text-lg font-semibold">
                  <p className="text-black no-underline hover:underline">
                    {tour.title}
                  </p>
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <a href="tel:9730786261">
                    <button 
                      className="bg-yellow-500 text-black text-sm py-2 px-4 rounded hover:bg-yellow-600 transition-all duration-200 font-medium"
                      onClick={() => handleBookNow(tour._id)}
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default TourList;
