import React from 'react';

const GalleryCard = ({ imageUrl, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt="Gallery Image"
        className="w-full h-64 object-cover object-center"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg font-bold text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
