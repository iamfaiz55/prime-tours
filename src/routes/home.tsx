import React, { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Slide } from "@mui/material";
import { motion } from 'framer-motion';  
import heroImg from '../assets/images/maqbara-vertical.avif';
import heroImg02 from '../assets/images/elora-vertical.png';
import heroVideo from '../assets/images/fort.jpg';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import Services from '../services/Services';

// Lazy load heavy components
const TourList = lazy(() => import('../components/FeaturedTourList'));
const CarList = lazy(() => import('../pages/Car'));
const MasonryImagesGallery = lazy(() => import('../Image-gallery/MasonryImagesGallery'));

import "./home.css";

// Define types
interface SlideItem {
  type: string;
  src: string;
  alt: string;
}

const Home: React.FC = () => {
  const slides: SlideItem[] = [
    { type: 'image', src: heroImg, alt: 'Hero 1' },
    { type: 'image', src: heroVideo, alt: 'Hero 3' },
    { type: 'image', src: heroImg02, alt: 'Hero 2' },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showScrollUp, setShowScrollUp] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show or hide Scroll Up Button based on scroll position
  const handleScroll = (): void => {
    if (window.scrollY > 200) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEO Metadata with Helmet */}
      <Helmet>
        <title>Best Tours & Travels in Aurangabad | Taxi Services Chhatrapati Sambhaji Nagar | Prime Tours</title>
        <meta name="description" content="#1 Tours & Travels in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Best taxi services, car rentals, tour packages for Ajanta Ellora, Daulatabad Fort. Book now!" />
        <meta name="keywords" content="tours and travels aurangabad, taxi service aurangabad, car rental aurangabad, chhatrapati sambhaji nagar tours, ajanta ellora tours, daulatabad fort tours, taxi rental aurangabad, best travel agency aurangabad, maharashtra tours, prime tours aurangabad" />
        
        {/* Performance optimizations */}
        <link rel="preload" href={heroImg} as="image" />
        <link rel="preload" href={heroImg02} as="image" />
        <link rel="preload" href={heroVideo} as="image" />
        <link rel="preload" href={worldImg} as="image" />
        <link rel="preload" href={experienceImg} as="image" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Tours & Travels in Aurangabad | Taxi Services Chhatrapati Sambhaji Nagar | Prime Tours" />
        <meta property="og:description" content="#1 Tours & Travels in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Best taxi services, car rentals, tour packages for Ajanta Ellora, Daulatabad Fort. Book now!" />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.primetourstravels.com" />
        <meta property="og:site_name" content="Prime Tours and Travels" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Tours & Travels in Aurangabad | Taxi Services Chhatrapati Sambhaji Nagar | Prime Tours" />
        <meta name="twitter:description" content="#1 Tours & Travels in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Best taxi services, car rentals, tour packages for Ajanta Ellora, Daulatabad Fort. Book now!" />
        <meta name="twitter:image" content={heroImg} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Prime Tours and Travels" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Aurangabad, Maharashtra, India" />
        <meta name="geo.position" content="19.8762;75.3433" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="canonical" href="https://www.primetourstravels.com" />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Prime Tours and Travels",
            "description": "Best Tours & Travels in Aurangabad (Chhatrapati Sambhaji Nagar), Maharashtra. Professional taxi services, car rentals, and tour packages.",
            "url": "https://www.primetourstravels.com",
            "telephone": "+919595722214",
            "email": "info@primetourstravels.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Aurangabad",
              "addressRegion": "Maharashtra",
              "postalCode": "431001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.8762",
              "longitude": "75.3433"
            },
            "areaServed": "Aurangabad, Maharashtra",
            "serviceType": ["Tours and Travels", "Taxi Services", "Car Rental", "Tour Packages"],
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center lg:pr-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="text-center md:text-left">
                  <div className="hero_subtitle flex justify-center md:justify-start gap-2">
                    <Subtitle subtitle="Know Before You Go" />
                    <img src={worldImg} alt="World Travel Icon - Prime Tours Aurangabad" className="w-16 h-16 rounded-full mt-3" loading="lazy" decoding="async" />
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                    Travelling opens the door to creating{" "}
                    <span className="highlight text-blue-500">Memories</span>
                  </h1>
                  <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                    Welcome to Prime Tours and Travels, your trusted travel partner in Aurangabad! Explore iconic sites like Ajanta, Ellora, and Bibi Ka Maqbara with our seamless, personalized services. Experience comfort, safety, and unforgettable memories with every journey!
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Section - Hero Carousel */}
            <div className="w-full">
              {/* Hero Carousel for Small Screens */}
              <div className="block lg:hidden relative">
                <div className="overflow-hidden relative rounded-lg h-96">
                  {slides.map((slide, index) => (
                    <Slide
                      direction={index > currentIndex ? "left" : "right"}
                      in={index === currentIndex}
                      timeout={700}
                      mountOnEnter
                      unmountOnExit
                      key={index}
                    >
                      <div className="absolute top-0 left-0 w-full h-full">
                        <motion.img
                          src={slide.src}
                          alt={`${slide.alt} - Prime Tours Aurangabad`}
                          className="w-full h-full object-cover rounded-lg"
                          loading="eager"
                          decoding="async"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </Slide>
                  ))}
                </div>

                {/* Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
                >
                  ›
                </button>
              </div>

              {/* Grid Layout for Large Screens */}
              <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="hero_img-box">
                    <img src={heroImg} alt="" className="rounded-lg shadow-md" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="hero_img-box hero_video-box mt-6">
                    <img src={heroVideo} className="rounded-lg shadow-md" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="hero_img-box mt-12">
                    <img src={heroImg02} alt="" className="rounded-lg shadow-md" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollUp && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 px-5 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ↑
        </motion.button>
      )}

      {/* Services, Tours, Cars, Experience, Gallery Sections */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Subtitle subtitle={"What we serve"} />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 text-gray-800">We offer our best services</h3>
          </motion.div>
          <Services />
        </div>
      </motion.section>

      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Subtitle subtitle={"Explore"} />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">Our featured tours</h2>
          </motion.div>
          <Suspense fallback={<div className="text-center py-8"><div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
            <TourList />
          </Suspense>
        </div>
      </motion.section>

      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Subtitle subtitle={"Explore"} />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">Our featured Cars</h2>
          </motion.div>
          <Suspense fallback={<div className="text-center py-8"><div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
            <CarList />
          </Suspense>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <Subtitle subtitle={"Experience"} />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 md:mb-4">
                  With our all experience <br />we will serve you
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">
                  With decades of experience in the industry, we're committed to creating remarkable journeys. 
                </p>
              </div>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-blue-500 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    12k+
                  </motion.h4>
                  <h6 className="text-gray-600 font-semibold">Successful trips</h6>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-blue-500 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    2k+
                  </motion.h4>
                  <h6 className="text-gray-600 font-semibold">Regular Clients</h6>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-white rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h4 
                    className="text-3xl font-bold text-blue-500 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    15
                  </motion.h4>
                  <h6 className="text-gray-600 font-semibold">years of experience</h6>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={experienceImg} 
                alt="experience" 
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Subtitle subtitle={"Gallery"} />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">Visit our customers' tour gallery</h2>
          </motion.div>
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Suspense fallback={<div className="text-center py-8"><div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
              <MasonryImagesGallery />
            </Suspense>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
