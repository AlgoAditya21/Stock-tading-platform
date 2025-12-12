import React from 'react'
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RightSection from './RightSection';
import Universe from './Universe';
import LeftSection from './LeftSection';

function PricingPage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universe/>
            <Footer/>
        </>
    );
}

export default PricingPage;