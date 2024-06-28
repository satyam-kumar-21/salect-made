// NewUpdates.js
import React from 'react';
import UpdateCard from './UpdateCard';

const NewUpdates = () => {
  const updates = [
    {
      imageUrl: 'https://via.placeholder.com/400x250',
      title: 'Update Title 1',
      description:
        'Description of the update or news item goes here. It can include details about recent improvements, events, or changes in services.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x250',
      title: 'Update Title 2',
      description:
        'Description of the update or news item goes here. It can include details about recent improvements, events, or changes in services.',
    },
    // Add more update items as needed
  ];

  return (
    <section id='new-update' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            New Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <UpdateCard
                key={index}
                imageUrl={update.imageUrl}
                title={update.title}
                description={update.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUpdates;
