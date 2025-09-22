import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Define types
interface TourData {
  _id: string;
  title: string;
  city: string;
  photo: string;
  price?: number;
  featured: boolean;
}

interface CarData {
  id: number;
  name: string;
  image: string;
  capacity: number;
  featured: boolean;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  guests: number;
  message: string;
  serviceType: 'tour' | 'car';
  serviceName: string;
}

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  tourData?: TourData | null;
  carData?: CarData | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose, tourData, carData }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: carData?.capacity || 1,
    message: '',
    serviceType: tourData ? 'tour' : 'car',
    serviceName: tourData?.title || carData?.name || ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Update form data when carData or tourData changes
  React.useEffect(() => {
    if (carData) {
      setFormData(prev => ({
        ...prev,
        serviceType: 'car',
        serviceName: carData.name,
        guests: carData.capacity
      }));
    } else if (tourData) {
      setFormData(prev => ({
        ...prev,
        serviceType: 'tour',
        serviceName: tourData.title,
        guests: 1
      }));
    }
  }, [carData, tourData]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.phone.trim() || !formData.date) {
        alert('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      // Create WhatsApp message with all form data (simplified format)
      const whatsappMessage = `*Prime Tours & Travels - Booking Request*

*Service Details:*
Service: ${formData.serviceType === 'tour' ? 'Tour Package' : 'Car Rental'}
${formData.serviceType === 'tour' ? 'Tour' : 'Car'}: ${formData.serviceName}
${carData ? `Vehicle Capacity: ${carData.capacity} passengers` : ''}
${tourData && tourData.price ? `Price: ₹${tourData.price}` : ''}

*Customer Information:*
Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim() || 'Not provided'}
${formData.serviceType === 'tour' ? 'Travel' : 'Rental'} Date: ${formData.date}
Number of ${formData.serviceType === 'tour' ? 'Guests' : 'Passengers'}: ${formData.guests}

*Additional Message:*
${formData.message.trim() || 'No additional message'}

*Contact Details:*
Phone: +91 9730786261
Email: info@primetours.com

Thank you for choosing Prime Tours & Travels!`;

      // Create WhatsApp URL with proper encoding
      const whatsappUrl = `https://wa.me/919730786261?text=${encodeURIComponent(whatsappMessage)}`;

      // Try to open WhatsApp
      const whatsappWindow = window.open(whatsappUrl, '_blank');
      
      // If popup blocked, try alternative method
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed == 'undefined') {
        // Fallback: copy to clipboard and show instructions
        navigator.clipboard.writeText(whatsappMessage).then(() => {
          alert('WhatsApp popup was blocked. Message copied to clipboard. Please paste it in WhatsApp to +91 9730786261');
        }).catch(() => {
          // If clipboard fails, show the message in an alert
          alert(`WhatsApp popup blocked. Please send this message to +91 9730786261:\n\n${whatsappMessage}`);
        });
      }
      
      // Log the data being sent (for debugging)
      console.log('Form data being sent to WhatsApp:', formData);
      console.log('WhatsApp URL:', whatsappUrl);
      
    } catch (error) {
      console.error('Error sending to WhatsApp:', error);
      alert('There was an error opening WhatsApp. Please try again.');
      setIsSubmitting(false);
      return;
    }
    
    // Show success animation immediately
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        guests: carData?.capacity || 1,
        message: '',
        serviceType: tourData ? 'tour' : 'car',
        serviceName: tourData?.title || carData?.name || ''
      });
      onClose();
    }, 3000);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const successVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Helmet>
            <title>Book Your Tour/Car - Prime Tours and Travels</title>
            <meta name="description" content="Book your tour package or car rental with Prime Tours and Travels. Quick and easy booking process." />
          </Helmet>
          
          <motion.div
            className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50 overflow-hidden"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          >
            <motion.div
              className="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] overflow-y-auto mx-2 sm:mx-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 sm:p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white">Book Now</h2>
                    <p className="text-blue-100 text-xs sm:text-sm mt-1">
                      {formData.serviceType === 'tour' ? 'Tour Package' : 'Car Rental'}
                    </p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="text-white hover:text-blue-200 text-xl sm:text-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-3 sm:p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Service Info */}
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                        {formData.serviceType === 'tour' ? 'Selected Tour' : 'Selected Car'}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base font-medium">{formData.serviceName}</p>
                      {carData && (
                        <div className="mt-2 space-y-1">
                          <p className="text-xs sm:text-sm text-gray-500">
                            <i className="ri-user-line mr-1"></i>
                            Capacity: {carData.capacity} passengers
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            <i className="ri-car-line mr-1"></i>
                            Vehicle Type: {carData.name}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all max-w-full text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <motion.input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all max-w-full text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                        placeholder="+91 9876543210"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all max-w-full text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        {formData.serviceType === 'tour' ? 'Travel Date' : 'Rental Date'} *
                      </label>
                      <motion.input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all max-w-full text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Number of {formData.serviceType === 'tour' ? 'Guests' : 'Passengers'} *
                      </label>
                      <motion.select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all max-w-full text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                      >
                        {Array.from({ length: carData ? carData.capacity : 10 }, (_, i) => i + 1).map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </motion.select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        whileFocus={{ scale: 1.02 }}
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 sm:py-4 sm:px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending to WhatsApp...
                        </div>
                      ) : (
                        'Send Booking Request via WhatsApp'
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-4 sm:py-8"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <span className="text-white text-2xl sm:text-3xl">✓</span>
                    </motion.div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">Booking Sent!</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                      Your booking request has been sent to WhatsApp. We'll contact you soon!
                    </p>
                    <motion.div
                      className="text-xs sm:text-sm text-gray-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Closing in 3 seconds...
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingForm;
