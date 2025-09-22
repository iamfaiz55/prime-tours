import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo5.png';
import { Link } from 'react-router-dom';

// Define types
interface QuickLink {
  path: string;
  display: string;
}

const quickLinks: QuickLink[] = [
  { path: '/', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/tours', display: 'Tours' },
];

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 pt-12 pb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="footer_logo">
              <motion.img 
                src={logo} 
                alt="Prime Tours and Travels" 
                className="mb-4 w-32" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Explore destinations with Prime Tours and Travels. Your comfort and unforgettable travel experiences are our priority.
              </p>
              <div className="social_links flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="ri-facebook-circle-line text-2xl"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="ri-instagram-line text-2xl"></i>
                </motion.a>
                
              </div>
            </div>
          </motion.div>

          {/* Discover Section */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg font-semibold mb-4 text-gray-800">Discover</h5>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={item.path} 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block py-1"
                  >
                    {item.display}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h5>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <i className="ri-map-pin-line text-lg text-blue-600"></i>
                <span className="text-sm">Aurangabad, Maharashtra, India</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <i className="ri-mail-line text-lg text-blue-600"></i>
                <span className="text-sm">info@primetours.com</span>
              </motion.li>
            
              {/* Additional Phone Numbers */}
              <motion.li 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <i className="ri-phone-fill text-lg text-blue-600"></i>
                <a href="tel:+919595722214" className="text-sm hover:text-blue-600 transition-colors duration-300">
                  +91 9595722214
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <i className="ri-phone-fill text-lg text-blue-600"></i>
                <a href="tel:+919730786261" className="text-sm hover:text-blue-600 transition-colors duration-300">
                  +91 9730786261
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <i className="ri-phone-fill text-lg text-blue-600"></i>
                <a href="tel:+918055555904" className="text-sm hover:text-blue-600 transition-colors duration-300">
                  +91 8055555904
                </a>
              </motion.li>
              {/* Note */}
              <motion.li 
                className="mt-4 p-3 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-gray-600">
                  <strong>Note:</strong> For any inquiries, feel free to call us on the above numbers.
                </p>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="text-center mt-8 pt-6 border-t border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            &copy; {year}, Prime Tours and Travels. Designed by Shaikh Faiz. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;