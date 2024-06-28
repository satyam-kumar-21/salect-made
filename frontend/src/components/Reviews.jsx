import React from 'react';
import Review from './Review'; // Adjust the import path based on your project structure

const Reviews = () => {
  const reviews = [
    {
      name: 'John Doe',
      text: 'Great service! They were very professional and thorough. Will definitely use them again!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      text: 'Excellent job cleaning our office space. Highly recommended!',
      rating: 4,
    },
    {
      name: 'Michael Johnson',
      text: 'Prompt and efficient service. Impressed with their attention to detail.',
      rating: 5,
    },
    {
      name: 'Sarah Brown',
      text: 'Good service overall, though a bit pricey compared to others.',
      rating: 3,
    },
  ];

  return (
    <section id='reviews' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Review
                key={index}
                name={review.name}
                text={review.text}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
