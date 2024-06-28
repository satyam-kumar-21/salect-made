import React from 'react';

const Overview = () => {
  return (
    <section id='overview' className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Welcome to Select Made
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          Watch.ME offers you the finest collection of watches designed to provide accurate timekeeping and
          elegant design. Discover the perfect watch that fits your style and needs.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 py-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
                Precision Timekeeping
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Our watches are engineered with the highest precision to ensure you are always on time.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
                Stylish Designs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                We offer a wide range of designs that suit any style, whether you're dressing up for a special occasion or need a reliable watch for everyday wear.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2">
                Quality Materials
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Made from durable materials, our watches are built to last and withstand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
