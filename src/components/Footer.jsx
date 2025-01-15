import React from 'react';
import logo from '../assets/images/logo5.png';
import { Link } from 'react-router-dom';

const quickLinks = [
  { path: '/', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and About Section */}
          <div className="mb-4">
            <div className="footer_logo">
              <img src={logo} alt="Prime Tours and Travels" className="mb-3" style={{ width: '50%' }} />
              <p className="text-sm">
                Explore destinations with Prime Tours and Travels. Your comfort and unforgettable travel experiences are our priority.
              </p>
              <div className="social_links flex space-x-3 mt-3">
                <Link to="#" className="text-gray-500 hover:text-blue-500">
                  <i className="ri-facebook-circle-line text-xl"></i>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-pink-500">
                  <i className="ri-instagram-line text-xl"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Discover Section */}
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">Discover</h5>
            <ul className="space-y-1 text-sm">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-600 hover:text-gray-900">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-lg"></i>
                <span>Aurangabad, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-lg"></i>
                <span>info@primetours.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-fill text-lg"></i>
                <span>+91 9960669724</span>
              </li>
              {/* Additional Phone Numbers */}
              <li className="flex items-center gap-2">
                <i className="ri-phone-fill text-lg"></i>
                <span>+91 9595722214</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-fill text-lg"></i>
                <span>+91 8421413751</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-fill text-lg"></i>
                <span>+91 8055555904</span>
              </li>
              {/* Note */}
              <li className="mt-2 text-xs text-gray-600">
                <strong>Note:</strong> For any inquiries, feel free to call us on the above numbers.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            &copy; {year}, Prime Tours and Travels. Designed by Shaikh Faiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
