 
// import React from "react";
// import Navbar from "../components/header/Navbar";
// import Footer from "../components/footer/Footer";

// const Contact = () => {
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
//                 <form 
//                   action="https://formspree.io/f/mrbkkwkw"
//                   method="POST"
//                   className="space-y-6"
//                 >
//                   <div>
//                     <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
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
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                       Your Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="5"
//                       required
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
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Contact;

import React from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Swal from 'sweetalert2';

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
          icon: "success"
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
        icon: "error"
      });
    });
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28 px-4 sm:px-6 lg:px-8 bg-[#F4F3EB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            We'd love to hear from you. Whether you have a question about our services, need support,
            or want to explore a potential partnership, our team is here to help.
          </p>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-16">
            <div className="md:flex min-h-[500px]">
              <div className="md:w-1/3 p-8 md:p-12 bg-[#D7D6C2] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>
                  <div className="mb-4">
                    <p className="font-semibold flex items-center mb-1">
                      <span className="mr-2">📧</span>Email Us
                    </p>
                    <p className="text-gray-800">info@gigasphere.com</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold flex items-center mb-1">
                      <span className="mr-2">📞</span>Call Us
                    </p>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-semibold flex items-center mb-1">
                      <span className="mr-2">📍</span>Visit Us
                    </p>
                    <p className="text-gray-800">
                      5258 Rue Ferrier, H4P 1L7 <br /> Montreal, QC, Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8 md:p-12 bg-white">
                <form 
                  action="https://formspree.io/f/mrbkkwkw"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 mb-4 md:mb-0">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring focus:ring-[#D7D6C2] focus:border-[#D7D6C2]"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#D7D6C2] hover:bg-[#c4c3b0] text-black font-semibold py-3 px-6 rounded-md shadow-md transition duration-200"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;