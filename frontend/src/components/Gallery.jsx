import React from 'react';
import GalleryCard from './GalleryCard';

const Gallery = () => {
  const galleryItems = [
    {
      imageUrl: 'https://via.placeholder.com/800x600',
      description: 'Description for Image 1',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x600',
      description: 'Description for Image 2',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x600',
      description: 'Description for Image 3',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x600',
      description: 'Description for Image 4',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x600',
      description: 'Description for Image 5',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x600',
      description: 'Description for Image 6',
    },
  ];

  return (
    <section id='gallery' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={index}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
