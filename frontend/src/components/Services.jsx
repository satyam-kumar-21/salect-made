import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Tailored cleaning solutions for homes, apartments, and condos.',
      imageUrl: 'https://via.placeholder.com/800x600', // Example URL, replace with actual images
    },
    {
      title: 'Commercial Cleaning',
      description: 'Efficient cleaning services for offices, retail spaces, and businesses.',
      imageUrl: 'https://via.placeholder.com/800x600', // Example URL, replace with actual images
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for hard-to-reach places and heavily soiled areas.',
      imageUrl: 'https://via.placeholder.com/800x600', // Example URL, replace with actual images
    },
    {
      title: 'Carpet Cleaning',
      description: 'Specialized cleaning to refresh and maintain the cleanliness of carpets.',
      imageUrl: 'https://via.placeholder.com/800x600', // Example URL, replace with actual images
    },
    {
      title: 'Window Cleaning',
      description: 'Professional window cleaning services for homes and businesses.',
      imageUrl: 'https://via.placeholder.com/800x600', // Example URL, replace with actual images
    },
    {
      title: 'Move-in/Move-out Cleaning',
      description: 'Thorough cleaning services for moving in or out of a home or office.',
      imageUrl: 'https://via.placeholder.com/800x600', // Example URL, replace with actual images
    },
  ];

  return (
    <section id='services' className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <img
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    src={service.imageUrl}
                    alt={service.title}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-white leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
