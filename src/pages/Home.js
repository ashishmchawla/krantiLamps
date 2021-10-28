import React from "react";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import CarouselComponent from "../components/headerComponents/CarouselCompoent";

const Home = () => {
    return (
        <div>
            <TopBar />
            <Navigation />
            <CarouselComponent />
            <div> Home Page </div>
        </div>
    );
};

export default Home;
