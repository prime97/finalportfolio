import React, { useEffect } from "react";
import Card from './containers/Card'
import About from "./containers/About";
import Footer from "./containers/Footer";
import Skills from "./containers/Skills";
import Contact from "./containers/Contact";
import Aos from "aos";
import 'aos/dist/aos.css';
import Carousel from "./containers/Carousel";


function App() {

  useEffect(() =>
  {
    Aos.init({
      once:true,
    })
  })

  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
      <div data-aos='fade-down' data-aos-duration='800'>
      <Card />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
      <About />
      </div>

      
      <Skills />
      <Carousel />
      <Contact />
      
      <Footer />
      
    </div>
  );
}

export default App;
