import React from "react";
import Hero from './Hero';
import Cards from './Cards';
import Carousel from './Carousel';
import Footer from '../Components/Footer';
import Endpage from '../Components/Endpage';

function Holidays() {
  

    return (
      <div className="App"> 
  <Hero/>
      <Cards/>
      <Carousel/>
      <Footer/>
      <Endpage/> 
      


       </div>
    );
  }
  
  export default Holidays ;