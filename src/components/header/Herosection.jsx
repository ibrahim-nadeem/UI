 

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start p-4 overflow-hidden">
       
      <img
        src="public/images/Pasted image.png" 
        alt="GigaSphere Solutions"
        className="absolute inset-0 w-full h-full object-cover object-top z-10 border-2"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-1"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="md:w-1/2 space-y-4 text-left">  
          <h3 className="text-xs font-semibold text-white">GigaSphere Solutions</h3>  
          <h1 className="text-2xl md:text-2xl font-bold text-white">  
            Accelerate digital transformation with scalable, secure, and intelligent solutions.
          </h1>
          <p className="text-base text-gray-200"> 
            Get up and running quickly with our expert consulting services.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium transition duration-300 hover:bg-gray-200" // Slightly smaller padding
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;