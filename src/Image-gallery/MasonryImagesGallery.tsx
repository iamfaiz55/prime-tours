import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';
import './MasonryGallery.css';

const MasonryImagesGallery: React.FC = React.memo(() => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const galleryImages = useMemo(() => [
    {
      src: "https://res.cloudinary.com/dpc5d15ci/image/upload/v1758566364/client-1_e2f8jf.jpg",
      alt: "Gallery Image 1",
      id: 1
    },
    {
      src: "https://res.cloudinary.com/dpc5d15ci/image/upload/v1758566365/client-3_oufkhq.jpg",
      alt: "Gallery Image 2", 
      id: 2
    },
    {
      src: "https://res.cloudinary.com/dpc5d15ci/image/upload/v1758566365/client-2_yqzhdz.jpg",
      alt: "Gallery Image 3",
      id: 3
    },
  ], []);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="gallery-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {galleryImages.map((item, index) => (
        <motion.div 
          key={item.id} 
          className="gallery-item"
          variants={itemVariants}
        >
          <OptimizedImage
            src={item.src}
            alt={item.alt}
            className="gallery-img"
            onLoad={() => handleImageLoad(index)}
            priority={index < 2} // Load first 2 images with priority
          />
        </motion.div>
      ))}
    </motion.div>
  );
});

export default MasonryImagesGallery;