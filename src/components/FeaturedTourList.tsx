import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
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
      price: '₹1799',
      featured: true,
    },
    {
      _id: '2',
      title: 'Historical Tour Daulatabad And Khuldabad',
      city: 'Aurangabad',
      photo: daulatabad,
      price: '₹1499',
      featured: false,
    },
    {
      _id: '3',
      title: 'Ajanta Caves',
      city: 'Aurangabad',
      photo: ajanta,
      price: '₹2699',
      featured: true,
    },
    {
      _id: '4',
      title: 'Local Sightseeing',
      city: 'Aurangabad',
      photo: city,
      price: '₹1799',
      featured: true,
    },
    {
      _id: '5',
      title: 'Panchwati',
      city: 'Nashik',
      photo: panch,
      price: '₹12/km (4-seater) | ₹16/km (7-seater)',
      featured: true,
    },
    {
      _id: '6',
      title: 'Shani Shingnapur',
      city: 'Ahmadnagar',
      photo: shani,
      price: '₹2799',
      featured: true,
    },
    {
      _id: '7',
      title: 'Mumbai',
      city: 'Maharashtra',
      photo: mumbai,
      price: '₹12/km (4-seater) | ₹16/km (7-seater)',
      featured: true,
    },
    {
      _id: '8',
      title: 'Pune',
      city: 'Maharashtra',
      photo: pune,
      price: '₹12/km (4-seater) | ₹16/km (7-seater)',
      featured: true,
    },
    {
      _id: '9',
      title: 'Panchakki',
      city: 'Aurangabad',
      photo: panchakki,
      price: '₹1799',
      featured: true,
    },
    {
      _id: '10',
      title: 'Shirdi',
      city: 'Ahmednagar',
      photo: shani, // replace with correct Shirdi image
      price: '₹3299',
      featured: true,
    },
    {
      _id: '11',
      title: 'Ajanta + Ellora Same Day Tour',
      city: 'Aurangabad',
      photo: elora, // You could also create a combined banner image
      price: '₹3499 (4-seater) | ₹4499 (7-seater)',
      featured: true,
    },
  ], []);

  const handleBookNow = useCallback((tourId: string) => {
    console.log('Book now clicked for tour:', tourId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 }
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
          <motion.div key={tour._id || index} className="mb-4" variants={itemVariants}>
            <div className="tour_card shadow-lg border border-transparent rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="relative">
                <OptimizedImage
                  src={tour.photo}
                  alt={tour.title}
                  className="w-full h-48"
                  priority={index < 3}
                />
                {tour.featured && (
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-black py-1 px-2 rounded-bl-lg text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <i className="ri-map-pin-line"></i> {tour.city}
                  </span>
                </div>
                <h5 className="text-lg font-semibold text-black">
                  {tour.title}
                </h5>
                {tour.price && (
                  <p className="text-yellow-600 font-bold text-sm sm:text-base">
                    {tour.price}
                  </p>
                )}
                <div className="mt-2">
                  <a href="tel:9595722214">
                    <button 
                      className="bg-yellow-500 text-black text-sm py-2 px-4 rounded hover:bg-yellow-600 transition-all duration-200 font-medium w-full sm:w-auto"
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
