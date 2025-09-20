import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ciaz from "../assets/images/ciaz1.png";
import swift from "../assets/images/swift.png";
import innova from "../assets/images/innova1.png";
import crysta from "../assets/images/crysta1.png";
import BookingForm from '../components/BookingForm';

// Define types
interface Car {
  id: number;
  name: string;
  image: string;
  capacity: number;
  featured: boolean;
}

const CarList: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleBookNow = (car: Car): void => {
    setSelectedCar(car);
    setIsBookingOpen(true);
  };

  const cars: Car[] = [
    {
      id: 1,
      name: 'Swift Dzire',
      image: swift,
      capacity: 4,
      featured: false,
    },
    {
      id: 2,
      name: 'Ciaz',
      image: ciaz,
      capacity: 4,
      featured: false,
    },
    {
      id: 3,
      name: 'Innova Crysta',
      image: crysta,
      capacity: 7,
      featured: false,
    },
    {
      id: 4,
      name: 'Toyota Innova',
      image: innova,
      capacity: 7,
      featured: false,
    },
  ];

  return (
    <>
      {/* Helmet for SEO Metadata */}
      <Helmet>
        <title>Best Cars for Rent in Maharashtra | Prime Tours and Travels</title>
        <meta
          name="description"
          content="Discover the best and most comfortable cars for rent with Prime Tours and Travels. We offer a range of vehicles, including Swift Dzire, Ciaz, Innova Crysta, and more for your travel needs."
        />
        <meta
          name="keywords"
          content="best cars for rent, comfortable cars, car rentals, Swift Dzire, Toyota Innova, Innova Crysta, car services Maharashtra, Prime Tours"
        />
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Best Cars for Rent in Maharashtra | Prime Tours and Travels" />
        <meta
          property="og:description"
          content="Discover the best and most comfortable cars for rent with Prime Tours and Travels. We offer a range of vehicles, including Swift Dzire, Ciaz, Innova Crysta, and more for your travel needs."
        />
        <meta property="og:image" content="path_to_image_for_og_image" />
        <meta property="og:url" content="https://www.primetours.com/cars" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Best Cars for Rent in Maharashtra | Prime Tours and Travels" />
        <meta
          name="twitter:description"
          content="Discover the best and most comfortable cars for rent with Prime Tours and Travels. We offer a range of vehicles, including Swift Dzire, Ciaz, Innova Crysta, and more for your travel needs."
        />
        <meta name="twitter:image" content="path_to_image_for_twitter_image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="car_list container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Best Cars for Your Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our wide selection of vehicles for a comfortable and reliable travel experience. Whether you're looking for a small car or a spacious family vehicle, we have something for every need.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {cars.map((car, index) => (
            <motion.div 
              key={car.id}
              className="mb-4"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring', 
                stiffness: 100 
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white shadow-lg border-0 h-full rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    src={car.image || '/path/to/placeholder.jpg'}
                    alt={`${car.name} car`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                  {car.featured && (
                    <motion.span 
                      className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-1 px-3 rounded-full text-sm font-semibold shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      Featured
                    </motion.span>
                  )}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      onClick={() => handleBookNow(car)}
                      className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Quick Book
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-4">
                  <motion.h5 
                    className="text-lg font-semibold mb-3 text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {car.name}
                  </motion.h5>
                  <motion.div 
                    className="flex justify-between items-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="flex items-center text-gray-600">
                      <i className="ri-user-line mr-2"></i>Capacity: {car.capacity} persons
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => handleBookNow(car)}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                    <motion.a
                      href="tel:+919960669724"
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-phone-line"></i>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Booking Form Modal */}
      <BookingForm 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        carData={selectedCar}
      />
    </>
  );
};

export default CarList;