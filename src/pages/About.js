import React from "react";
import { Container, Image } from "react-bootstrap";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import Footer from "../components/commonComponents/Footer";
import mapImg from "../theme/images/kranti_lamps_map.jpeg";

const About = () => {
    return (
        <div>
            <TopBar />
            <Navigation />
            <Container>
                <h3 className="about__page__title">About Us </h3>
                <hr />
                <div className="about__page">
                    <p>
                        Kranti LED Lamps was established in 1995 by Mr Ramakant
                        Mukund Jadhav. Kranti LED Lamps has a history of 27
                        years of quality and satisfied customers.
                        <br />
                        <br />
                        Driven by the increasing demand of energy efficient
                        lighting, Kranti LED Lamp is proving to be one amongst
                        the largest contributors to the ongoing, environmentally
                        friendly LED revolution.
                        <br />
                        <br />
                        Our exclusive manufacturing tools coupled with a
                        proficient team of Electronics engineers and detailers
                        can execute any kind of project under the sun, within
                        the shortest of deadlines. Consequently, a routine
                        execution of approximately more than 50,000 pieces of an
                        array of LED Lamps per month substantiates our skilled
                        work. We’re a vertically integrated manufacturing
                        facility of wide range of LED-based lighting for
                        general, commercial and domestic retail applications.
                        <br />
                        <br />
                        We have full-fledged laboratory that comprises of
                        cutting edge testing and measuring equipment’s in order
                        to conduct various tests on the internal components as
                        well as the finished product. Only inspected and
                        approved products are allowed to make their way to the
                        market.
                        <br />
                        <br />
                        As a Kranti LED Lamps’s customer, we assure you the best
                        product backed by highest level of service. Our
                        dedicated technical & distribution center located in
                        Ulhasnagar, Mumbai offers complete technical support on
                        all our products. The Kranti experience awaits you,
                        Reach us today!
                    </p>
                </div>
                <br />

                <div className="about__page__founder">
                    <Image src={mapImg} fluid />
                </div>
                <br />
            </Container>
            <Footer />
        </div>
    );
};

export default About;
