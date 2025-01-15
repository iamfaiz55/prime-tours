import React from 'react';
import './newsletter.css'; // Import the external CSS

const Subtitle = ({ subtitle }) => {
  return (
    <h3 className="subtitle">
      {subtitle}
    </h3>
  );
};

export default Subtitle;
