import React from 'react';
import './services.css';
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🌐
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Web Development
              </h3>
              <p className="text-gray-600">
                Creating responsive and interactive websites.
              </p>
            </div>
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🔍
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                SEO Optimization
              </h3>
              <p className="text-gray-600">
                Improving your website’s visibility on search engines.
              </p>
            </div>
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🎨
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Graphic Design
              </h3>
              <p className="text-gray-600">
                Designing eye-catching graphics and visual content.
              </p>
            </div>
            <div className="service-card bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                📈
              </div>
              <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Strategies to enhance your online presence and reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
