import React from 'react';

const About = () => {
  return (
    <section id='about' className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
              About Us
            </h2>
            <p className="text-gray-700 dark:text-white leading-relaxed mb-8">
              Select Made is dedicated to providing top-notch cleaning services tailored to meet your needs. We pride ourselves on delivering exceptional cleaning results with professionalism and care.
            </p>
            <p className="text-gray-700 dark:text-white leading-relaxed mb-8">
              Our team consists of highly trained professionals who are committed to ensuring your space is clean, fresh, and healthy. Whether it’s residential cleaning, commercial cleaning, or specialized services, we are here to make your environment spotless.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
            <img
              src="https://clean360.dexignlab.com/xhtml/images/our-work/pic3.jpg"
              className="rounded-lg shadow-lg max-w-full h-auto"
              alt="About Select Made"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
