import React from 'react';
import Header from "../components/Header/Header.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import STA from "../components/STA/STA.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import About from "../components/About/About.jsx";
import Advantages from "../components/Advantages/Advantages.jsx";

const AboutPage = () => {
    return (
        <>
            <Header />
            <Welcome />
            <About />
            <Advantages />
            <Slider />
            <Reviews />
            <STA />
            <Footer />
        </>
    );
};

export default AboutPage;