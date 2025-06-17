 

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
                </p>
            </div>
        </footer>
    );
};

export default Footer;
