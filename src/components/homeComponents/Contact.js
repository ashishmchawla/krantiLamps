import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__heading">
                <h6>Where are we</h6>
                <h2>Contact Us</h2>
            </div>
            <div className="contact__content">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className="contact__content__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1342.1905869659822!2d73.15230206090054!3d19.21393583585121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79597b698ca81%3A0x422f5592f2427a66!2sKranti%20Led%20Lamp!5e0!3m2!1sen!2sin!4v1635587670844!5m2!1sen!2sin"
                                    width="400"
                                    title="Location"
                                    height="300"
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </Col>
                        <Col lg={1} md={1}></Col>
                        <Col lg={7} md={7} sm={12}>
                            <div className="address">
                                <ul className="address__list" type="none">
                                    <li>
                                        <div className="address__main">
                                            <FaMapMarkerAlt />
                                            <p>
                                                Ramakant Industrial estate,
                                                <br /> B-11, Anand Nagar,
                                                <br /> Ashele Pada,
                                                <br />
                                                Ulhasnagar -421004
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
