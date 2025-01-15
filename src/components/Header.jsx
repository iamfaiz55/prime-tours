import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO metadata
import logo from '../assets/images/logo5.png';

// Define the navigation links
const navLinks = [
  { path: '/', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
  { path: '/car', display: 'Cars' },
  // { path: '/car', display: 'Cars' },
];

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
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

      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="px-10 md:px-10">
            <img src={logo} alt="Prime Tours Logo" className="w-32" />
          </div>

          {/* Desktop Navigation (visible on large screens) */}
          <nav className="hidden md:flex space-x-6 mr-10">
            <ul className="flex space-x-6">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-gray-800 ${isActive ? 'font-bold' : ''}`
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <span
            className="md:hidden cursor-pointer text-2xl mr-8"
            onClick={toggleOffcanvas}
          >
            {/* SVG for Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>

        {/* Offcanvas for Small Screens */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-yellow-400  text-white shadow-lg transition-transform transform ${
            isOffcanvasOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ zIndex: 999 }}
        >
          <div className="flex justify-between items-center p-4">
            <h5 className="text-lg">Menu</h5>
            <button
              type="button"
              className="text-white text-3xl"
              onClick={toggleOffcanvas}
              aria-label="Close"
            >
              &times; {/* Close Button */}
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white ${isActive ? 'font-bold' : ''}`
                    }
                    onClick={toggleOffcanvas} // Close the offcanvas menu on link click
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
