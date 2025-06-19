import React from 'react';
import Homepage from './pages/homepage';

import { Routes, Route } from 'react-router-dom';
import ContactForm from './pages/contactus';



const App = () => {
  return (
<<<<<<< HEAD
=======
    
>>>>>>> 61b773b (initialize)
    <Routes>
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;

