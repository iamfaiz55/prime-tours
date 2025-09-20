import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/images/logo5.png';

// Define the navigation links type
interface NavLinkItem {
  path: string;
  display: string;
}

const navLinks: NavLinkItem[] = [
  { path: '/', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
  { path: '/car', display: 'Cars' },
];

const Header: React.FC = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);

  const toggleOffcanvas = (): void => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      {/* Helmet for SEO Metadata */}
      <Helmet>
        {/* Page Title for SEO */}
        <title>Top Travel and Tour Services | Prime Tours</title>
        <meta
          name="description"
          content="Explore the best travel and tour services with Prime Tours. Book your next adventure today with custom tours, car rentals, and expert guides."
        />
        <meta
          name="keywords"
          content="travel, tours, vacation packages, best tours, car rentals, travel guides, travel agency"
        />
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Top Travel and Tour Services | Prime Tours" />
        <meta
          property="og:description"
          content="Explore the best travel and tour services with Prime Tours. Book your next adventure today with custom tours, car rentals, and expert guides."
        />
        <meta property="og:image" content="path_to_image_for_og_image" />
        <meta property="og:url" content="https://www.primetours.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Top Travel and Tour Services | Prime Tours" />
        <meta
          name="twitter:description"
          content="Explore the best travel and tour services with Prime Tours. Book your next adventure today with custom tours, car rentals, and expert guides."
        />
        <meta name="twitter:image" content="path_to_image_for_twitter_image" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.header 
        className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 mx-4 mt-4 rounded-2xl border border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo Section */}
          <motion.div 
            className="px-2 md:px-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={logo} 
              alt="Prime Tours Logo" 
              className="w-16 md:w-20 lg:w-24" 
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Desktop Navigation (visible on large screens) */}
          <motion.nav 
            className="hidden md:flex space-x-6 mr-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ul className="flex space-x-8">
              {navLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-gray-800 font-medium px-4 py-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg' 
                          : 'hover:bg-blue-50 hover:text-blue-600 hover:shadow-md'
                      }`
                    }
                  >
                    {item.display}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <motion.button
            className="md:hidden p-2 rounded-xl hover:bg-blue-50 transition-all duration-300"
            onClick={toggleOffcanvas}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isOffcanvasOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Dialog Menu */}
         <AnimatePresence>
           {isOffcanvasOpen && (
             <motion.div
               className="mobile-dialog fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] md:hidden"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               onClick={toggleOffcanvas}
             >
               <motion.div
                 className="mobile-dialog-content bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-sm mx-auto border border-white/20"
                 initial={{ scale: 0.7, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.7, opacity: 0, y: 20 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 onClick={(e) => e.stopPropagation()}
               >
                 {/* Dialog Header */}
                 <div className="flex justify-between items-center p-4 border-b border-gray-200/50">
                   <motion.h3 
                     className="text-lg font-bold text-gray-800"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 }}
                   >
                     Menu
                   </motion.h3>
                   <motion.button
                     type="button"
                     className="text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300"
                     onClick={toggleOffcanvas}
                     aria-label="Close"
                     whileHover={{ scale: 1.1, rotate: 90 }}
                     whileTap={{ scale: 0.9 }}
                   >
                     ×
                   </motion.button>
                 </div>

                 {/* Dialog Content */}
                 <div className="p-4">
                   <motion.ul 
                     className="space-y-1"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                   >
                     {navLinks.map((item, index) => (
                       <motion.li 
                         key={index}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3 + index * 0.1 }}
                       >
                         <NavLink
                           to={item.path}
                           className={({ isActive }) =>
                             `block text-gray-700 text-base py-3 px-3 rounded-xl transition-all duration-300 ${
                               isActive 
                                 ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg' 
                                 : 'hover:bg-blue-50 hover:text-blue-600'
                             }`
                           }
                           onClick={toggleOffcanvas}
                         >
                           <div className="flex items-center">
                             <span className="mr-2">
                               {index === 0 && <i className="ri-home-line text-lg"></i>}
                               {index === 1 && <i className="ri-information-line text-lg"></i>}
                               {index === 2 && <i className="ri-map-2-line text-lg"></i>}
                               {index === 3 && <i className="ri-car-line text-lg"></i>}
                             </span>
                             {item.display}
                           </div>
                         </NavLink>
                       </motion.li>
                     ))}
                   </motion.ul>

                   {/* Contact Info */}
                   <motion.div 
                     className="mt-4 pt-4 border-t border-gray-200/50"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6 }}
                   >
                     <h4 className="text-xs font-semibold text-gray-600 mb-2">Quick Contact</h4>
                     <div className="space-y-1">
                       <motion.a
                         href="tel:+919960669724"
                         className="flex items-center text-xs text-gray-600 hover:text-blue-600 transition-colors duration-300"
                         whileHover={{ x: 3 }}
                       >
                         <i className="ri-phone-line mr-2 text-sm"></i>
                         +91 9960669724
                       </motion.a>
                       <motion.a
                         href="https://wa.me/919960669724"
                         className="flex items-center text-xs text-gray-600 hover:text-green-600 transition-colors duration-300"
                         whileHover={{ x: 3 }}
                       >
                         <i className="ri-whatsapp-line mr-2 text-sm"></i>
                         WhatsApp
                       </motion.a>
                     </div>
                   </motion.div>
                 </div>
               </motion.div>
             </motion.div>
           )}
         </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;