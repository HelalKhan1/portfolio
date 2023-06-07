
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import React from 'react';


import About from './Components/About';
import Footer from './Components/Footer';
import Service from './Components/Service';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';



function App() {

  return (
    <>
     
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Service/>
      <Footer/>
      
         
    </>
  );
}

export default App;
