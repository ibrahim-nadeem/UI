 
import React from 'react';
 
const AboutUs = ({ id }) => {
  return (
    <div id={id} className="py-16 bg-white">  
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Us</h2>
        
       
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
     
          <div className="w-full md:w-1/2">
            <img 
              src="public/images/office.png"  
              alt="GigaSphere Solutions Team"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

      
          <div className="w-full md:w-1/2 bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              At GigaSphere Solutions, we help Canadian organizations unlock the full 
              value of their data by modernizing infrastructure, integrating legacy systems, 
              and seamlessly migrating to the cloud. Our services are designed to power 
              analytics, enhance performance, and future-proof your business operations, 
              ensuring Canadian enterprises stay competitive in a rapidly evolving digital 
              landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
