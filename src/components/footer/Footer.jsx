 

<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // You'll need to install react-icons: npm install react-icons

const Footer = () => {
    return (
 
        <footer style={{ backgroundColor: '#D3D3D3' }} className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-black text-2xl font-bold mb-4">GigaSphere</h3>
                    <p className="text-black text-sm leading-relaxed">
                        Accelerating digital transformation with scalable, secure, and intelligent solutions for a smarter tomorrow.
                    </p>
                </div>

 
                <div>
                    <h4 className="text-black text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      
                        <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm">Home</a></li>
                        <li><a href="#about-us" className="text-black hover:text-gray-700 transition duration-300 text-sm">About Us</a></li>
                        <li><a href="#services" className="text-black hover:text-gray-700 transition duration-300 text-sm">Services</a></li>
                        <li><Link to="/contact" className="text-black hover:text-gray-700 transition duration-300 text-sm">Contact</Link></li>
                    </ul>
                </div>
 
                <div>
                    <h4 className="text-black text-lg font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Management & Governance</a></li>
                        <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Migration​</a></li>
                        <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm">Unified Analytics with Databricks</a></li>
                        <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm">Data Integration​</a></li>
                    </ul>
                </div>
 
                <div>
                    <h4 className="text-black text-lg font-semibold mb-4">Connect With Us</h4>
                    <ul className="space-y-2 mb-4">
                        <li className="text-black text-sm">Email: <a href="mailto:info@gigaspher.com" className="hover:text-gray-700">contact@gigaspheresolutions.ca</a></li>
                        <li className="text-black text-sm">Phone: <a href="tel:+1234567890" className="hover:text-gray-700">+1 (234) 567-890</a></li>
                        <li className="text-black text-sm">Address:  5258 Rue Ferrier, H4P 1L7 Montreal, QC, Canada</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
 
            <div className="border-t border-gray-300 mt-8 pt-6 text-center">
                <p className="text-black text-sm">
                    &copy; {new Date().getFullYear()} GigaSphere Solutions. All rights reserved.
=======
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // You'll need to install react-icons: npm install react-icons

// const Footer = () => {
//     return (
 
//         <footer style={{ backgroundColor: '#D3D3D3' }} className="py-10 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
 
//                 <div className="col-span-1 md:col-span-1">
//                     <h3 className="text-black text-2xl font-bold mb-4">GigaSphere</h3>
//                     <p className="text-black text-sm leading-relaxed">
//                         Accelerating digital transformation with scalable, secure, and intelligent solutions for a smarter tomorrow.
//                     </p>
//                 </div>

 
//                 <div>
//                     <h4 className="text-black text-lg font-semibold mb-4">Quick Links</h4>
//                     <ul className="space-y-2">
                      
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm">Home</a></li>
//                         <li><a href="#about-us" className="text-black hover:text-gray-700 transition duration-300 text-sm">About Us</a></li>
//                         <li><a href="#services" className="text-black hover:text-gray-700 transition duration-300 text-sm">Services</a></li>
//                         <li><Link to="/contact" className="text-black hover:text-gray-700 transition duration-300 text-sm">Contact</Link></li>
//                     </ul>
//                 </div>
 
//                 <div>
//                     <h4 className="text-black text-lg font-semibold mb-4">Our Services</h4>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Management & Governance</a></li>
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm"> Data Migration​</a></li>
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm">Unified Analytics with Databricks</a></li>
//                         <li><a href="#" className="text-black hover:text-gray-700 transition duration-300 text-sm">Data Integration​</a></li>
//                     </ul>
//                 </div>
 
//                 <div>
//                     <h4 className="text-black text-lg font-semibold mb-4">Connect With Us</h4>
//                     <ul className="space-y-2 mb-4">
//                         <li className="text-black text-sm">Email: <a href="mailto:info@gigaspher.com" className="hover:text-gray-700">contact@gigaspheresolutions.ca</a></li>
//                         <li className="text-black text-sm">Phone: <a href="tel:+1234567890" className="hover:text-gray-700">+1 (234) 567-890</a></li>
//                         <li className="text-black text-sm">Address:  5258 Rue Ferrier, H4P 1L7 Montreal, QC, Canada</li>
//                     </ul>
//                     <div className="flex space-x-4 mt-4">
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
//                             <FaFacebookF size={24} />
//                         </a>
//                         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
//                             <FaTwitter size={24} />
//                         </a>
//                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
//                             <FaLinkedinIn size={24} />
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
//                             <FaInstagram size={24} />
//                         </a>
//                     </div>
//                 </div>
//             </div>
 
//             <div className="border-t border-gray-300 mt-8 pt-6 text-center">
//                 <p className="text-black text-sm">
//                     &copy; {new Date().getFullYear()} GigaSphere Solutions. All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
               
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-gray-900 text-2xl font-bold mb-6 flex items-center">
                        <span className="bg-black text-white p-2 rounded-lg mr-3">GS</span>
                        GigaSphere
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Accelerating digital transformation with scalable, secure, and intelligent solutions for a smarter tomorrow.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300 bg-white p-2 rounded-full shadow-sm">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300 bg-white p-2 rounded-full shadow-sm">
                            <FaTwitter size={16} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300 bg-white p-2 rounded-full shadow-sm">
                            <FaLinkedinIn size={16} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300 bg-white p-2 rounded-full shadow-sm">
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>
 
                <div>
                    <h4 className="text-gray-900 text-lg font-semibold mb-6 pb-2 border-b border-gray-200">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Home</a></li>
                        <li><a href="#about-us" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> About Us</a></li>
                        <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Services</a></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Contact</Link></li>
                    </ul>
                </div>

              
                <div>
                    <h4 className="text-gray-900 text-lg font-semibold mb-6 pb-2 border-b border-gray-200">Our Services</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Data Management</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Data Migration</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Unified Analytics</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> Data Integration</a></li>
                    </ul>
                </div>

         
                <div>
                    <h4 className="text-gray-900 text-lg font-semibold mb-6 pb-2 border-b border-gray-200">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="text-gray-600 text-sm flex items-start">
                            <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-gray-400" />
                            <span>5258 Rue Ferrier, H4P 1L7 Montreal, QC, Canada</span>
                        </li>
                        <li className="text-gray-600 text-sm flex items-center">
                            <FaPhone className="mr-3 text-gray-400" />
                            <a href="tel:+1234567890" className="hover:text-gray-900 transition duration-300">+1 (234) 567-890</a>
                        </li>
                        <li className="text-gray-600 text-sm flex items-center">
                            <FaEnvelope className="mr-3 text-gray-400" />
                            <a href="mailto:contact@gigaspheresolutions.ca" className="hover:text-gray-900 transition duration-300">contact@gigaspheresolutions.ca</a>
                        </li>
                    </ul>
                    
                
                    <div className="mt-8">
                        <h5 className="text-gray-900 text-sm font-medium mb-3">Subscribe to our newsletter</h5>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent w-full"
                            />
                            <button className="bg-gray-900 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-gray-800 transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

             
            <div className="border-t border-gray-200 mt-12 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} GigaSphere Solutions. All rights reserved.
                    <span className="block mt-2 text-xs text-gray-400">Designed with ❤️ in Montreal</span>
>>>>>>> 61b773b (initialize)
                </p>
            </div>
        </footer>
    );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 61b773b (initialize)
