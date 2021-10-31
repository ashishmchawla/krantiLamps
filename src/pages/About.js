import React from "react";
import { Container } from "react-bootstrap";
import TopBar from "../components/headerComponents/TopBar";
import Navigation from "../components/headerComponents/Navigation";
import Footer from "../components/commonComponents/Footer";

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
                        Kranti LED Lamps was established in 1995 by the founder
                        Mr Ramakant Mukund Jadhav. Kranti LED Lamps has a
                        history of 27 years of quality and satisfied customers.
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
                    <h4 className="about__page__founder__title">
                        Meet the founder
                    </h4>
                    <hr />
                    <p>
                        The journey of Mr Ramakant Jadhav started when they came
                        to Mumbai to complete their education. People say the
                        city of Mumbai changes people and it really changed this
                        person’s (Mr Ramakant Jadhav) life. He started learning
                        that if you can put in your sweat and brain the city
                        will always reward you. They started selling Newspaper,
                        Milk and calendar to fund their own living. Studying in
                        a government school and living at an ashram Mr Ramakant
                        Jadhav finally completed their education as an CTI
                        graduate and Started working as a permanent Indian
                        railway’s employee at the age of 20, an ideal dream of
                        any ordinary Indian. But Mr Ramakant Jadhav was not a
                        person who would stop. Somewhere deep down they always
                        had the passion of getting into business and giving
                        employment to others. He always believed that by doing a
                        9-5 job he can earn his own livelihood but by doing a
                        Business he can be the source of livelihood for 50
                        others. Finally, they resigned from the government job
                        and started their journey in the lighting industry. With
                        the Help of their wife, Mrs Shobha Jadhav they achieved
                        various milestones. A journey that started with just a
                        person now has a family of 70 people in the “Kranti
                        Family” and this itself is an inspiring thing.
                    </p>
                </div>
                <br />
            </Container>
            <Footer />
        </div>
    );
};

export default About;
