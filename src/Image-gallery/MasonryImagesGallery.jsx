

import React from 'react';
import galleryImg01 from '../assets/images/gallery-01.jpg';
import galleryImg02 from '../assets/images/gallery-02.jpg';
import galleryImg03 from '../assets/images/gallery-03.jpg';
import galleryImg04 from '../assets/images/gallery-04.jpg';
import galleryImg05 from '../assets/images/gallery-05.jpg';
import galleryImg06 from '../assets/images/gallery-06.jpg';
import galleryImg07 from '../assets/images/gallery-07.jpg';
import './MasonryGallery.css'; // Import custom CSS

const MasonryImagesGallery = () => {
  const galleryImages = [
    galleryImg01,
    galleryImg07,
    galleryImg02,
    galleryImg06,
    galleryImg03,
    galleryImg04,
    galleryImg05,
    galleryImg07,
  ];

  return (
    <div className="gallery-grid">
      {galleryImages.map((item, index) => (
        <div key={index} className="gallery-item">
          <img
            className="gallery-img"
            src={item}
            alt={`Gallery ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryImagesGallery;
