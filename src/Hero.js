import React from 'react';
import Job from './Job';
import About from './About';
import Testimonial from './Testimonial';
import Mobius from './Mobius';
import Why from './Why';
import PricingPage from './PricingPage';
import Footer from './Footer';
import Navbar from './Component/NavBar';

function Hero() {
    return ( 
       <>
       <Navbar/>
       <Job/>
       <About/>
       <Testimonial/>
       <Mobius/>
       <Why/>
       <PricingPage/>
       <Footer/>
       </>
     );
}

export default Hero;
