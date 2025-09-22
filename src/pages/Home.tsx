'use client';

import React, { useEffect, useState, useCallback, useMemo, lazy, Suspense } from "react";
import { Slide } from "@mui/material";
import { motion } from 'framer-motion';  
import OptimizedImage from '../components/OptimizedImage';
import heroImg from '../../public/assets/images/maqbara-vertical.avif';
import heroImg02 from '../../public/assets/images/elora-vertical.png';
import heroVideo from '../../public/assets/images/fort.jpg';
import worldImg from '../../public/assets/images/world.png';
import experienceImg from '../../public/assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import Services from '../services/Services';
import TourList from '../components/FeaturedTourList';
import CarList from './Car';
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery'; 
import "./home.css";

// Lazy load heavy components
const LazyMasonryGallery = lazy(() => import('../Image-gallery/MasonryImagesGallery'));

const Home: React.FC = React.memo(() => {
  const slides = useMemo(() => [
    { type: 'image', src: heroImg, alt: 'Hero 1' },
    { type: 'image', src: heroVideo, alt: 'Hero 3'},
    { type: 'image', src: heroImg02, alt: 'Hero 2' },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Show or hide Scroll Up Button based on scroll position
  const handleScroll = useCallback(() => {
    if (window.scrollY > 200) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
                  <div className="hero_subtitle flex justify-center md:justify-start  gap-2 ">
                    <Subtitle subtitle="Know Before You Go" />
                    <OptimizedImage src={worldImg} alt="world" className="w-16 h-16 rounded-full mt-3" priority />
                  </div>
                  <h1 className="text-1xl lg:text-5xl font-semibold">
                    Travelling opens the door to creating{" "}
                    <span className="highlight text-yellow-500">Memories</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-700">
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
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <OptimizedImage
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover rounded-lg"
                            priority={index === 0}
                          />
                        </motion.div>
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
                    <OptimizedImage src={heroImg} alt="" className="rounded-lg shadow-md" priority />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="hero_img-box hero_video-box mt-6">
                    <OptimizedImage src={heroVideo} alt="" className="rounded-lg shadow-md" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <div className="hero_img-box mt-12">
                    <OptimizedImage src={heroImg02} alt="" className="rounded-lg shadow-md" />
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
          className="fixed bottom-5  right-5 bg-yellow-500 text-white p-3 px-5 rounded-full shadow-lg hover:bg-yellow-600 transition-all z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ↑
        </motion.button>
      )}

      {/* Services, Tours, Cars, Experience, Gallery Sections */}
      <section className="">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <Subtitle subtitle={"What we serve"} />
            <h3 className="text-3xl font-semibold mb-4">We offer our best services</h3>
          </div>
          <Services />
        </div>
      </section>
      <section className="">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Subtitle subtitle={"Explore"} />
            <h2 className="text-3xl font-semibold">Our featured tours</h2>
          </div>
          <TourList />
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Subtitle subtitle={"Explore"} />
            <h2 className="text-3xl font-semibold">Our featured Cars</h2>
          </div>
          <CarList />
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-5">
        <div className="block md:flex justify-center">
          <div>
            <div className="mb-8">
              <Subtitle subtitle={"Experience"} />
              <h2 className="text-3xl font-semibold">With our all experience <br />we will serve you</h2>
              <p className="mt-4">
              With decades of experience in the industry, we're committed to creating remarkable journeys. 
                          </p>
            </div>
            <div className="flex gap-8 mb-5 justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold">12k+</h4>
                <h6>Successful trips</h6>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold">2k+</h4>
                <h6>Regular Clients</h6>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold">15</h4>
                <h6>years of experience</h6>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <OptimizedImage src={experienceImg} alt="experience" className="w-96 md:w-full" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="text-3xl font-semibold">Visit our customers' tour gallery</h2>
          </div>
          <div className="w-full">
            <Suspense fallback={
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
              </div>
            }>
              <LazyMasonryGallery />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
});

export default Home;
