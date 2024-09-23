import React from 'react';
import Header from './Header';
const Home = () => {
  return (
    <>
      <Header />
      <section className="pt-12 mt-5 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-4xl lg:leading-tight">
              Developing Innovative Web Solutions Using Artificial Intelligence
            </p>
            <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
              With extensive experience in web development, I deliver customized
              solutions tailored to your business needs. My services include
              creating responsive, user-friendly websites and innovative
              AI-driven tools to enhance customer engagement.
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#contact"
                title=""
                className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Request Service Now
              </a>
              <a
                href="https://wa.me/4915211301829?text=Hello%20I%20need%20your%20services%20as%20a%20programmer."
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-green-500 border-2 border-transparent sm:w-auto rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                role="button"
                target="_blank"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex justify-center items-center mt-8">
          <div className="relative flex justify-center items-center">
            <div className="lg:max-w-4xl lg:mx-auto">
              <img
                className="px-0 "
                src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
                alt="AI Chatbot"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
