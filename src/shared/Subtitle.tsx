import React from 'react';
import './newsletter.css'; // Import the external CSS

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <h3 className="subtitle">
      {subtitle}
    </h3>
  );
};

export default Subtitle;