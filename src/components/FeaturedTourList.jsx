import React from 'react';
import { Link } from 'react-router-dom'; // Updated for correct routing import
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import maqbara from './../assets/maqbara.jpeg';
import elora from './../assets/elora.jpeg';
import ajanta from './../assets/ajanta.jpeg';
import daulatabad from './../assets/daulatabad.jpeg';
import city from './../assets/images/city.jpg';
import panch from './../assets/images/panchavatiNashik.jpg';
import shani from './../assets/images/shani.jpg';
import mumbai from './../assets/images/mumbai.jpeg';
import pune from './../assets/images/pune.jpg';
import { Helmet } from 'react-helmet-async';

const TourList = () => {
  const featuredTours = [
   
    {
      _id: '1',
      title: 'Elora Caves',
      city: 'Aurangabad',
      photo: elora,
      price: 500,
      featured: true,
      reviews: [
        { rating: 5, comment: 'Best vacation ever!' },
        { rating: 4, comment: 'The water was so clear!' },
      ],
    },
    {
      _id: '2',
      title: 'Historical Tour Daulatabad And Khuldabad',
      city: 'Aurangabad',
      photo: daulatabad,
      // price: 150,
      featured: false,
      reviews: [
        { rating: 4, comment: 'Loved the Colosseum!' },
        { rating: 3, comment: 'Crowded but worth it.' },
      ],
    },
    {
      _id: '3',
      title: 'Ajanta Caves',
      city: 'Aurangabad',
      photo: ajanta,
      // price: 300,
      featured: true,
      reviews: [
        { rating: 5, comment: 'The views were breathtaking!' },
        { rating: 5, comment: 'Best trekking experience!' },
      ],
    },
    {
      _id: '4',
      title: 'Local Signtseeing',
      city: 'Aurangabad',
      photo: city,
      // price: 300,
      featured: true,
      reviews: [
        { rating: 5, comment: 'The views were breathtaking!' },
        { rating: 5, comment: 'Best trekking experience!' },
      ],
    },
    {
      _id: '5',
      title: 'Panchwati',
      city: 'Nashik',
      photo: panch,
      // price: 300,
      featured: true,
      reviews: [
        { rating: 5, comment: 'The views were breathtaking!' },
        { rating: 5, comment: 'Best trekking experience!' },
      ],
    },
    {
      _id: '6',
      title: 'Shani Shingnapur',
      city: 'Ahmadnagar',
      photo: shani,
      // price: 300,
      featured: true,
      reviews: [
        { rating: 5, comment: 'The views were breathtaking!' },
        { rating: 5, comment: 'Best trekking experience!' },
      ],
    },
    {
      _id: '7',
      title: 'Mumbai',
      city: 'Maharashtra',
      photo: mumbai,
      // price: 300,
      featured: true,
      reviews: [
        { rating: 5, comment: 'The views were breathtaking!' },
        { rating: 5, comment: 'Best trekking experience!' },
      ],
    },
    {
      _id: '8',
      title: 'Pune',
      city: 'Maharashtra',
      photo: pune,
      // price: 300,
      featured: true,
      reviews: [
        { rating: 5, comment: 'The views were breathtaking!' },
        { rating: 5, comment: 'Best trekking experience!' },
      ],
    },
  ];

  return <>

    <Helmet>
    <title>Best Tour Packages in Aurangabad, Maharashtra | Prime Tours</title>
    <meta
      name="description"
      content="Explore top-rated tour packages in Aurangabad, Maharashtra. Book featured tours to Elora Caves, Ajanta Caves, and more with Prime Tours."
    />
    <meta
      name="keywords"
      content="Aurangabad tours, Ajanta Caves, Elora Caves, Daulatabad, historical tours, Maharashtra travel, best tours Aurangabad, Prime Tours"
    />
    <meta name="robots" content="index, follow" />
    
    {/* Open Graph for Social Media */}
    <meta property="og:title" content="Best Tour Packages in Aurangabad, Maharashtra | Prime Tours" />
    <meta property="og:description" content="Explore top-rated tour packages in Aurangabad, Maharashtra. Book featured tours to Elora Caves, Ajanta Caves, and more with Prime Tours." />
    <meta property="og:image" content="path_to_image_for_og_image" />
    <meta property="og:url" content="https://www.primetours.com/tours" />
    <meta property="og:type" content="website" />
    
    {/* Twitter Card */}
    <meta name="twitter:title" content="Best Tour Packages in Aurangabad, Maharashtra | Prime Tours" />
    <meta name="twitter:description" content="Explore top-rated tour packages in Aurangabad, Maharashtra. Book featured tours to Elora Caves, Ajanta Caves, and more with Prime Tours." />
  </Helmet>
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
                <img src={tour.photo} alt={tour.title} className="w-full h-48 object-cover" />
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
                  <Link to={`/tours/${tour._id}`} className="text-black no-underline hover:underline">
                    {tour.title}
                  </Link>
                </h5>
                <div className="flex items-center justify-between mt-3">
                  {/* <h5 className="text-gray-700">
                    ${tour.price} <span className="font-normal text-gray-400">/ per person</span>
                  </h5> */}
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
    </>
};

export default TourList;
