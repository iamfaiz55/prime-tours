import React from 'react';
import { motion } from 'framer-motion';
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

const TourList: React.FC = () => {
  const featuredTours = [
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredTours.map((tour) => (
          <motion.div
            key={tour._id}
            className="mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <div className="tour_card shadow-lg border border-transparent rounded-lg overflow-hidden hover:scale-105 transition-all">
              <div className="relative">
                <img 
                  src={tour.photo} 
                  alt={tour.title} 
                  className="w-full h-48 object-cover" 
                />
                {tour.featured && (
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-black py-1 px-2 rounded-bl-lg">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-gray-500">
                    <i className="ri-map-pin-line"></i> {tour.city}
                  </span>
                </div>
                <h5 className="mt-3 text-lg font-semibold">
                  <p className="text-black no-underline hover:underline">
                    {tour.title}
                  </p>
                </h5>
                <div className="flex items-center justify-between mt-3">
                  <a href="tel:9960669724">
                    <button className="bg-yellow-500 text-black text-sm py-2 px-4 rounded hover:bg-yellow-600 transition-all">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
