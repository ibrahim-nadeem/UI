import React from 'react';
import Navbar from '../components/header/Navbar';
import HeroSection from '../components/header/Herosection';
import AboutUs from '../components/header/Aboutus';
import ServicesSection from '../components/header/Services';
// import ContactForm from './components/header/Contactform';
import PartnerSlider from '../components/header/PartnerMarquee';
import Footer from '../components/footer/Footer';
<<<<<<< HEAD
=======
// import Loader from '../components/header/loader';
 
>>>>>>> 61b773b (initialize)
 


const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
<<<<<<< HEAD
=======
     {/* <Loader /> */}
>>>>>>> 61b773b (initialize)
      <Navbar />

      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutUs id="about-us" />
        <ServicesSection id="services" />
        <PartnerSlider />
        {/* <ContactForm id="contact" /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;
