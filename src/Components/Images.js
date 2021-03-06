import './images.css';
import React from 'react';
import ImageCard from './ImageCard';

const Images = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="images">{images}</div>;
};

export default Images;
