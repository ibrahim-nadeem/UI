 
import React, { useState, useEffect } from 'react';
import ContactForm from '../../pages/contactus';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    const [scrolled, setScrolled] = useState(false);

 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

     
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {  
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);  

    return (
        <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 shadow-md z-50 /* py-1 hata diya gaya hai */
                       text-black  /* Text color is always black */
                       transition-colors duration-300`}
                       style={{ backgroundColor: scrolled ? 'white' : '#D3D3D3' }}>
 
            <div className="flex items-center">
                <img 
                    src="public/images/Untitled design (3).png"  
                    alt="GigaSphere Logo"
                  
                    className="h-20 w-auto object-contain rounded-full shadow-md border border-gray-300" 
                />
            </div>

        
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-black focus:outline-none">  
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

 
            <div className="space-x-4 hidden md:flex">
                <a
                    href="#"
                   
                    className={`relative group block py-2 px-4 text-black /* Text color is always black */
                               transition-colors duration-300 overflow-hidden`}
                >
                    <span className="relative z-10">Home</span>
              
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                    href="#about-us"
                    className={`relative group block py-2 px-4 text-black /* Text color is always black */
                               transition-colors duration-300 overflow-hidden`}
                >
                    <span className="relative z-10">About Us</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                    href="#services"
                    className={`relative group block py-2 px-4 text-black /* Text color is always black */
                               transition-colors duration-300 overflow-hidden`}
                >
                    <span className="relative z-10">Our Services</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <Link
                    to="/contact"
                    className={`relative group block py-2 px-4 text-black /* Text color is always black */
                               transition-colors duration-300 overflow-hidden`}
                >
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
            </div>

      
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4">
                    <a
                        href="#"
                        onClick={() => setIsMenuOpen(false)}  
                        className="w-full text-center px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#about-us"
                        onClick={() => setIsMenuOpen(false)}  
                        className="w-full text-center px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300"
                    >
                        About Us
                    </a>
                    <a
                        href="#services"
                        onClick={() => setIsMenuOpen(false)}  
                        className="w-full text-center px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300"
                    >
                        Our Services
                    </a>
                    <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}  
                        className="w-full text-center px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
