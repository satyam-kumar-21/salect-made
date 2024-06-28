import React from 'react';

const NewUpdates = () => {
  return (
    <section id='new-update' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            New Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example update item 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Update Image"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Update Title 1
                </h3>
                <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                  Description of the update or news item goes here. It can include details about recent improvements, events, or changes in services.
                </p>
                <a href="#" className="text-pink-500 dark:text-pink-400 font-bold hover:underline">
                  Read more →
                </a>
              </div>
            </div>
            
            {/* Example update item 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Update Image"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Update Title 2
                </h3>
                <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                  Description of the update or news item goes here. It can include details about recent improvements, events, or changes in services.
                </p>
                <a href="#" className="text-pink-500 dark:text-pink-400 font-bold hover:underline">
                  Read more →
                </a>
              </div>
            </div>
            
            {/* Add more update items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUpdates;
