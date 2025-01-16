import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO metadata
import ciaz from "../assets/images/ciaz1.png";
import swift from "../assets/images/swift.png";
import innova from "../assets/images/innova1.png";
import crysta from "../assets/images/crysta1.png";

const CarList = () => {

  const cars = [
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
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Best Cars for Your Journey</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Choose from our wide selection of vehicles for a comfortable and reliable travel experience. Whether you're looking for a small car or a spacious family vehicle, we have something for every need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cars.map((car) => (
            <div className="mb-4" key={car.id}>
              <div className="bg-white shadow-sm border-0 h-full rounded-lg overflow-hidden">
                <div className="relative h-36">
                  <img
                    src={car.image || '/path/to/placeholder.jpg'}
                    alt={`${car.name} car`}
                    className="relative w-full mb-10"
                  />
                  {car.featured && (
                    <span className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 font-semibold text-xs rounded-br-lg">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-4 ">
                  <h5 className="text-lg font-semibold m-2 mt-2">{car.name}</h5>
                  <div className="flex justify-between items-center mb-3">
                    <span className="flex items-center">
                      <i className="ri-user-line mr-2"></i>Capacity: {car.capacity} persons
                    </span>
                  </div>
                  <button
                    className="w-full mt-3 py-2 px-4 bg-yellow-500 text-black font-semibold uppercase rounded-lg border-2 border-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:border-yellow-600"
                    aria-label={`Book ${car.name}`}
                    onClick={() => (window.location.href = 'tel:+919960669724')}
                  >
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarList;
