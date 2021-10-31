import React from "react";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import CarouselComponent from "../components/headerComponents/CarouselCompoent";
import AboutComponent from "../components/homeComponents/AboutComponent";
import Contact from "../components/homeComponents/Contact";
import Footer from "../components/commonComponents/Footer";

const Home = () => {
    return (
        <div>
            <TopBar />
            <Navigation />
            <CarouselComponent />
            <AboutComponent />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
