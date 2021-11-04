import React from "react";
import { Container } from "react-bootstrap";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import Footer from "../components/commonComponents/Footer";

const Products = () => {
    return (
        <div>
            <TopBar />
            <Navigation />
            <Container></Container>
            <Footer />
        </div>
    );
};

export default Products;
