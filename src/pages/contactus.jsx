 

// // import React from "react";
// // import Navbar from "../components/header/Navbar";
// // import Footer from "../components/footer/Footer";

// // const Contact = () => {
// //   return (
// //     <>
// //       <Navbar />
// //       <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">


// // import React from "react";
// // import Navbar from "../components/header/Navbar";
// // import Footer from "../components/footer/Footer";
// // import Swal from 'sweetalert2';

// // const Contact = () => {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const formData = new FormData(form);
    
// //     fetch(form.action, {
// //       method: 'POST',
// //       body: formData,
// //       headers: {
// //         'Accept': 'application/json'
// //       }
// //     })
// //     .then(response => {
// //       if (response.ok) {
// //         Swal.fire({
// //           title: "Thank You!",
// //           text: "Your message has been sent successfully!",
// //           icon: "success"
// //         });
// //         form.reset();
// //       } else {
// //         throw new Error('Form submission failed');
// //       }
// //     })
// //     .catch(error => {
// //       Swal.fire({
// //         title: "Error!",
// //         text: "There was a problem sending your message. Please try again.",
// //         icon: "error"
// //       });
// //     });
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       {/* Adjusted main content with proper padding-top */}
// //       <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
// //         <div className="max-w-7xl mx-auto pb-16">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 pt-8">

// //             Contact Us
// //           </h2>
// //           <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
// //             We'd love to hear from you. Whether you have a question about our services, need support,
// //             or want to explore a potential partnership, our team is here to help.
// //           </p>

// //           <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-16">
// //             <div className="md:flex min-h-[500px]">
// //               <div className="md:w-1/3 p-8 md:p-12 bg-[#D7D6C2] flex flex-col justify-between">
// //                 <div>
// //                   <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>
// //                   <div className="mb-4">
// //                     <p className="font-semibold flex items-center mb-1">
// //                       <span className="mr-2">📧</span>Email Us
// //                     </p>
// //                     <p className="text-gray-800">info@gigasphere.com</p>
// //                   </div>
// //                   <div className="mb-4">
// //                     <p className="font-semibold flex items-center mb-1">
// //                       <span className="mr-2">📞</span>Call Us
// //                     </p>
// //                     <p className="text-gray-800">+1 (555) 123-4567</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold flex items-center mb-1">
// //                       <span className="mr-2">📍</span>Visit Us
// //                     </p>
// //                     <p className="text-gray-800">
// //                       5258 Rue Ferrier, H4P 1L7 <br /> Montreal, QC, Canada
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="md:w-2/3 p-8 md:p-12 bg-white">
// //                 <form 
// //                   action="https://formspree.io/f/mrbkkwkw"
// //                   method="POST"
// //                   className="space-y-6"

// //                 >
// //                   <div>
// //                     <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Full Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="fullName"
// //                       name="fullName"
// //                       required
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
// //                     />
// //                   </div>
// //                   <div className="flex flex-col md:flex-row md:space-x-4">
// //                     <div className="flex-1 mb-4 md:mb-0">
// //                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                         Email Address *
// //                       </label>
// //                       <input
// //                         type="email"
// //                         id="email"
// //                         name="email"
// //                         required
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
// //                       />
// //                     </div>
// //                     <div className="flex-1">
// //                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// //                         Phone Number
// //                       </label>
// //                       <input
// //                         type="tel"
// //                         id="phone"
// //                         name="phone"
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Your Message *
// //                     </label>
// //                     <textarea
// //                       id="message"
// //                       name="message"
// //                       rows="5"
// //                       required
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
// //                     ></textarea>
// //                   </div>
// //                   <div>
// //                     <button
// //                       type="submit"
// //                       className="w-full bg-[#D7D6C2] hover:bg-[#c4c3b0] text-black font-semibold py-3 px-6 rounded-md shadow-md transition duration-200"
// //                     >
// //                       Send Message
// //                     </button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Contact;

// import React from "react";
// import Navbar from "../components/header/Navbar";
// import Footer from "../components/footer/Footer";
// import Swal from 'sweetalert2';
 


// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/header/Navbar";
// import Footer from "../components/footer/Footer";
// import Swal from 'sweetalert2';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
 

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
    
//     fetch(form.action, {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     })
//     .then(response => {
//       if (response.ok) {
//         Swal.fire({
//           title: "Thank You!",
//           text: "Your message has been sent successfully!",
   
//           icon: "success"
 
//           icon: "success",
//           background: '#F4F3EB',
//           confirmButtonColor: '#D7D6C2',
//           confirmButtonText: 'Continue'
 
//         });
//         form.reset();
//       } else {
//         throw new Error('Form submission failed');
//       }
//     })
//     .catch(error => {
//       Swal.fire({
//         title: "Error!",
//         text: "There was a problem sending your message. Please try again.",
 
//         icon: "error"

//         icon: "error",
//         background: '#F4F3EB',
//         confirmButtonColor: '#D7D6C2'
 
//       });
//     });
//   };

 
//   return (
//     <>
//       <Navbar />
//       <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
//             Contact Us
//           </h2>
//           <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
//             We'd love to hear from you. Whether you have a question about our services, need support,
//             or want to explore a potential partnership, our team is here to help.
//           </p>

//           <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-16">
//             <div className="md:flex min-h-[500px]">
//               <div className="md:w-1/3 p-8 md:p-12 bg-[#D7D6C2] flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>
//                   <div className="mb-4">
//                     <p className="font-semibold flex items-center mb-1">
//                       <span className="mr-2">📧</span>Email Us
//                     </p>
//                     <p className="text-gray-800">info@gigasphere.com</p>
//                   </div>
//                   <div className="mb-4">
//                     <p className="font-semibold flex items-center mb-1">
//                       <span className="mr-2">📞</span>Call Us
//                     </p>
//                     <p className="text-gray-800">+1 (555) 123-4567</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold flex items-center mb-1">
//                       <span className="mr-2">📍</span>Visit Us
//                     </p>
//                     <p className="text-gray-800">
//                       5258 Rue Ferrier, H4P 1L7 <br /> Montreal, QC, Canada
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="md:w-2/3 p-8 md:p-12 bg-white">
 
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 0.6
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
//         <div className="max-w-7xl mx-auto pb-16">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="text-center mb-12"
//           >
//             <motion.h2 
//               variants={itemVariants}
//               className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 pt-8"
//             >
//               Get In Touch
//             </motion.h2>
//             <motion.p 
//               variants={itemVariants}
//               className="text-gray-600 max-w-2xl mx-auto text-lg"
//             >
//               We'd love to hear from you. Whether you have a question about our services, need support,
//               or want to explore a potential partnership, our team is here to help.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="bg-white shadow-xl rounded-lg overflow-hidden mb-16 border border-gray-100"
//           >
//             <div className="md:flex min-h-[500px]">
//               {/* Contact Info Sidebar */}
//               <motion.div 
//                 whileHover={{ scale: 1.02 }}
//                 className="md:w-1/3 p-8 md:p-12 bg-[#D7D6C2] flex flex-col justify-between relative overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#D7D6C2] to-[#c4c3b0] opacity-50"></div>
//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
//                   <div className="space-y-6">
//                     <motion.div 
//                       whileHover={{ x: 5 }}
//                       className="flex items-start"
//                     >
//                       <div className="bg-white p-3 rounded-full shadow-sm mr-4">
//                         <FaEnvelope className="text-[#D7D6C2] text-lg" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
//                         <p className="text-gray-700">info@gigasphere.com</p>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div 
//                       whileHover={{ x: 5 }}
//                       className="flex items-start"
//                     >
//                       <div className="bg-white p-3 rounded-full shadow-sm mr-4">
//                         <FaPhone className="text-[#D7D6C2] text-lg" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
//                         <p className="text-gray-700">+1 (555) 123-4567</p>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div 
//                       whileHover={{ x: 5 }}
//                       className="flex items-start"
//                     >
//                       <div className="bg-white p-3 rounded-full shadow-sm mr-4">
//                         <FaMapMarkerAlt className="text-[#D7D6C2] text-lg" />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
//                         <p className="text-gray-700">
//                           5258 Rue Ferrier, H4P 1L7<br />
//                           Montreal, QC, Canada
//                         </p>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Contact Form */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="md:w-2/3 p-8 md:p-12 bg-white"
//               >
 
//                 <form 
//                   action="https://formspree.io/f/mrbkkwkw"
//                   method="POST"
//                   className="space-y-6"
//                   onSubmit={handleSubmit}
//                 >
 
//                   <div>
//                     <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
// = 
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
 
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       name="fullName"
//                       required
  
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
//                     />
//                   </div>
//                   <div className="flex flex-col md:flex-row md:space-x-4">
//                     <div className="flex-1 mb-4 md:mb-0">
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
 
//                       className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#D7D6C2] focus:border-[#D7D6C2] transition duration-200"
//                     />
//                   </motion.div>
                  
//                   <div className="flex flex-col md:flex-row md:space-x-4">
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.6 }}
//                       className="flex-1 mb-4 md:mb-0"
//                     >
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
 
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
 
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
 
//                         className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#D7D6C2] focus:border-[#D7D6C2] transition duration-200"
//                       />
//                     </motion.div>
                    
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.7 }}
//                       className="flex-1"
//                     >
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
 
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
// <<<<<<< HEAD
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// =======
//                         className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#D7D6C2] focus:border-[#D7D6C2] transition duration-200"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.8 }}
//                   >
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// >>>>>>> 61b773b (initialize)
//                       Your Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="5"
//                       required
// <<<<<<< HEAD
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
//                     ></textarea>
//                   </div>
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full bg-[#D7D6C2] hover:bg-[#c4c3b0] text-black font-semibold py-3 px-6 rounded-md shadow-md transition duration-200"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
// =======
//                       className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-[#D7D6C2] focus:border-[#D7D6C2] transition duration-200"
//                     ></textarea>
//                   </motion.div>
                  
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.9 }}
//                   >
//                     <button
//                       type="submit"
//                       className="w-full bg-[#D7D6C2] hover:bg-[#c4c3b0] text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.01]"
//                     >
//                       Send Message
//                     </button>
//                   </motion.div>
//                 </form>
//               </motion.div>
//             </div>
//           </motion.div>
// >>>>>>> 61b773b (initialize)
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Contact;



import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Swal from 'sweetalert2';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            title: "Thank You!",
            text: "Your message has been sent successfully!",
            icon: "success",
            background: '#F4F3EB',
            confirmButtonColor: '#D7D6C2',
            confirmButtonText: 'Continue'
          });
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(error => {
        Swal.fire({
          title: "Error!",
          text: "There was a problem sending your message. Please try again.",
          icon: "error",
          background: '#F4F3EB',
          confirmButtonColor: '#D7D6C2'
        });
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
        <div className="max-w-7xl mx-auto pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 pt-8"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              We'd love to hear from you. Whether you have a question about our services, need support,
              or want to explore a potential partnership, our team is here to help.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden mb-16 border border-gray-100"
          >
            <div className="md:flex min-h-[500px]">
              {/* Contact Info Sidebar */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="md:w-1/3 p-8 md:p-12 bg-[#D7D6C2] flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7D6C2] to-[#c4c3b0] opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                        <FaEnvelope className="text-[#D7D6C2] text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                        <p className="text-gray-700">info@gigasphere.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                        <FaPhone className="text-[#D7D6C2] text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                        <p className="text-gray-700">+1 (555) 123-4567</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                        <FaMapMarkerAlt className="text-[#D7D6C2] text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                        <p className="text-gray-700">
                          5258 Rue Ferrier, H4P 1L7<br />
                          Montreal, QC, Canada
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="md:w-2/3 p-8 md:p-12 bg-white"
              >
                <form
                  action="https://formspree.io/f/mrbkkwkw"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                    />
                  </motion.div>

                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex-1 mb-4 md:mb-0"
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex-1"
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm resize-none focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <button
                      type="submit"
                      className="w-full bg-[#D7D6C2] hover:bg-[#c4c3b0] text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.01]"
                    >
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
