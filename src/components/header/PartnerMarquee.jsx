// import React, { useEffect, useRef } from 'react';

// const PartnerSlider = () => {
//   const partners = [
//     { id: 1, logo: '/images/aws_logo_smile_1200x630.png', name: 'AWS' },
//     { id: 2, logo: '/images/microsoft-azure-logo.png', name: 'Azure' },
//     { id: 3, logo: '/images/social-icon-google-cloud-1200-630.png', name: 'Google Cloud' },
//     { id: 4, logo: '/images/shopify-bag.png', name: 'Shopify' },
//     { id: 5, logo: '/images/salesforce-logo-png_seeklogo-256541.png', name: 'Salesforce' },
//     { id: 6, logo: '/images/Screenshot from 2025-06-16 12-28-47.png', name: 'Partner' },
//   ];

//   const containerRef = useRef(null);
//   const requestRef = useRef();
//   const animationSpeed = 1;

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const allPartners = [...partners, ...partners];
    
//     container.innerHTML = '';
//     const sliderTrack = document.createElement('div');
//     sliderTrack.className = 'flex items-center';
    
//     allPartners.forEach(partner => {
//       const logoContainer = document.createElement('div');
//       logoContainer.className = 'mx-6 flex-shrink-0';  
      
//       const img = document.createElement('img');
//       img.src = partner.logo;
//       img.alt = partner.name;
//       img.className = 'h-14 w-28 object-contain';  
//       logoContainer.appendChild(img);
//       sliderTrack.appendChild(logoContainer);
//     });

//     container.appendChild(sliderTrack);

//     let position = 0;
//     const animate = () => {
//       position += animationSpeed;
      
//       if (position >= sliderTrack.scrollWidth / 2) {
//         position = 0;
//       }
      
//       sliderTrack.style.transform = `translateX(-${position}px)`;
//       requestRef.current = requestAnimationFrame(animate);
//     };

//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   return (
//     <div className="bg-gray-50 pt-8 pb-10 overflow-hidden">  
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Associate Partners</h2>
        
//         <div 
//           ref={containerRef}
//           className="relative h-20 w-full"  
//         />
//       </div>
//     </div>
//   );
// };

// export default PartnerSlider;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PartnerSlider = () => {
  const partners = [
    { id: 1, logo: '/images/aws_logo_smile_1200x630.png', name: 'AWS' },
    { id: 2, logo: '/images/microsoft-azure-logo.png', name: 'Azure' },
    { id: 3, logo: '/images/social-icon-google-cloud-1200-630.png', name: 'Google Cloud' },
    { id: 4, logo: '/images/shopify-bag.png', name: 'Shopify' },
    { id: 5, logo: '/images/salesforce-logo-png_seeklogo-256541.png', name: 'Salesforce' },
    { id: 6, logo: '/images/Screenshot from 2025-06-16 12-28-47.png', name: 'Partner' },
  ];

  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Double the array for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ['0%', '-50%'], // Move from 0 to -50% of total width
        transition: {
          duration: 20, // Adjust speed here (lower = faster)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    animate();

    return () => controls.stop();
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 100, 0],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-gray-500"
            style={{
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1 text-sm font-medium tracking-wider text-black uppercase rounded-full mb-4"
          >
            Strategic Alliances
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Our <span className="text-black">Technology</span> Partners
          </motion.h2>
          <motion.div 
            className="mx-auto h-1 w-20 bg-gradient-to-r from-black to-black rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

          <div
            ref={containerRef}
            className="overflow-hidden"
          >
            <motion.div
              className="slider-track flex items-center"
              animate={controls}
              style={{ width: `${partners.length * 200}px` }} // Adjust based on your logo sizes
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${index}`}
                  className="mx-8 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          className="text-center text-gray-600 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          We collaborate with industry leaders to deliver innovative solutions that drive your business forward.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PartnerSlider;