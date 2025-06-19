 
<<<<<<< HEAD
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
=======
// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const AboutUs = ({ id }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const slideInFromLeft = {
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         damping: 15,
//         stiffness: 100,
//         duration: 0.6
//       }
//     }
//   };

//   const slideInFromRight = {
//     hidden: { x: 100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         damping: 15,
//         stiffness: 100,
//         duration: 0.6
//       }
//     }
//   };

//   const fadeInUp = {
//     hidden: { y: 50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 0.77, 0.47, 0.97]
//       }
//     }
//   };

//   return (
//     <div id={id} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
   
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={{
//             visible: {
//               transition: { staggerChildren: 0.2 }
//             }
//           }}
//           className="text-center mb-16"
//         >
//           <motion.span 
//             variants={fadeInUp}
//             className="inline-block px-3 py-1 text-sm font-semibold text-black bg-indigo-50 rounded-full mb-4"
//           >
//             Who We Are
//           </motion.span>
//           <motion.h2 
//             variants={fadeInUp}
//             className="text-4xl font-bold text-black sm:text-5xl"
//           >
//             About <span className="text-black">GigaSphere</span> Solutions
//           </motion.h2>
//           <motion.div 
//             variants={fadeInUp}
//             className="mx-auto mt-4 h-1 w-20 bg-black rounded-full"
//           />
//         </motion.div>

      
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
 
//           <motion.div 
//             initial="hidden"
//             animate={controls}
//             variants={slideInFromLeft}
//             className="w-full lg:w-1/2 relative group"
//           >
//             <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
//             <motion.img 
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//               src="/images/office.png"
//               alt="GigaSphere Solutions Team"
//               className="relative rounded-xl shadow-xl w-full h-auto border-8 border-white"
//             />
//           </motion.div>
 
//           <motion.div 
//             initial="hidden"
//             animate={controls}
//             variants={slideInFromRight}
//             className="w-full lg:w-1/2"
//           >
//             <motion.div 
//               whileHover={{ 
//                 y: -5,
//                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
//               }}
//               transition={{ type: 'spring', stiffness: 300 }}
//               className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
//             >
//               <motion.p 
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: { 
//                     opacity: 1,
//                     transition: { delay: 0.4 }
//                   }
//                 }}
//                 className="text-lg text-black leading-relaxed mb-6"
//               >
//                 At <span className="font-semibold text-black">GigaSphere Solutions</span>, we empower Canadian organizations to harness the full potential of their data through innovative infrastructure modernization, seamless legacy system integration, and cloud migration strategies.
//               </motion.p>
//               <motion.p 
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: { 
//                     opacity: 1,
//                     transition: { delay: 0.6 }
//                   }
//                 }}
//                 className="text-lg text-black leading-relaxed mb-6"
//               >
//                 Our tailored services drive advanced analytics, optimize operational performance, and future-proof business ecosystems, ensuring Canadian enterprises maintain competitive advantage in today's digital-first economy.
//               </motion.p>
//               <motion.div 
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: { 
//                     opacity: 1,
//                     transition: { delay: 0.8 }
//                   }
//                 }}
//                 className="flex items-center mt-8"
//               >
//                 <motion.div 
//                   whileHover={{ scale: 1.1 }}
//                   className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg"
//                 >
//                   <motion.svg
//                     animate={{ 
//                       rotate: [0, 15, -15, 0],
//                       transition: { 
//                         repeat: Infinity, 
//                         repeatType: "mirror",
//                         duration: 2.5,
//                         ease: "easeInOut"
//                       } 
//                     }}
//                     className="h-6 w-6 text-indigo-600"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </motion.svg>
//                 </motion.div>
//                 <motion.p 
//                   variants={{
//                     hidden: { x: 20 },
//                     visible: { 
//                       x: 0,
//                       transition: { delay: 0.9 }
//                     }
//                   }}
//                   className="ml-4 text-base text-black"
//                 >
//                   <span className="font-semibold">100+</span> successful cloud migrations completed
//                 </motion.p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = ({ id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  return (
    <div id={id} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
   
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 py-1 text-sm font-semibold text-black bg-indigo-50 rounded-full mb-4"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-black sm:text-5xl"
          >
            About <span className="text-black">GigaSphere</span> Solutions
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="mx-auto mt-4 h-1 w-20 bg-black rounded-full"
          />
        </motion.div>

      
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
 
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={slideInFromLeft}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              src="/images/office.png"
              alt="GigaSphere Solutions Team"
              className="relative rounded-xl shadow-xl w-full h-full object-cover border-8 border-white"
              style={{ minHeight: '400px' }}
            />
          </motion.div>
 
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={slideInFromRight}
            className="w-full lg:w-1/2 flex"
          >
            <motion.div 
              whileHover={{ 
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 w-full flex flex-col"
              style={{ minHeight: '400px' }}
            >
              <div className="flex-grow">
                <motion.p 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { delay: 0.4 }
                    }
                  }}
                  className="text-lg text-black leading-relaxed mb-6"
                >
                  At <span className="font-semibold text-black">GigaSphere Solutions</span>, we empower Canadian organizations to harness the full potential of their data through innovative infrastructure modernization, seamless legacy system integration, and cloud migration strategies.
                </motion.p>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { delay: 0.6 }
                    }
                  }}
                  className="text-lg text-black leading-relaxed mb-6"
                >
                  Our tailored services drive advanced analytics, optimize operational performance, and future-proof business ecosystems, ensuring Canadian enterprises maintain competitive advantage in today's digital-first economy.
                </motion.p>
              </div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.8 }
                  }
                }}
                className="flex items-center mt-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg"
                >
                  <motion.svg
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      transition: { 
                        repeat: Infinity, 
                        repeatType: "mirror",
                        duration: 2.5,
                        ease: "easeInOut"
                      } 
                    }}
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                </motion.div>
                <motion.p 
                  variants={{
                    hidden: { x: 20 },
                    visible: { 
                      x: 0,
                      transition: { delay: 0.9 }
                    }
                  }}
                  className="ml-4 text-base text-black"
                >
                  <span className="font-semibold">100+</span> successful cloud migrations completed
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
>>>>>>> 61b773b (initialize)
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AboutUs;
=======
export default AboutUs;
>>>>>>> 61b773b (initialize)
