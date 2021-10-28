import React from "react";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import CarouselComponent from "../components/headerComponents/CarouselCompoent";
import AboutComponent from "../components/homeComponents/AboutComponent";

const Home = () => {
    return (
        <div>
            <TopBar />
            <Navigation />
            <CarouselComponent />
            <AboutComponent />
            <div> Home Page </div>
        </div>
    );
};

export default Home;
