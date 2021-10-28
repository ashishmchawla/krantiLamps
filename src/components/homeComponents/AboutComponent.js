import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaRocket, FaEye, FaRegGem } from "react-icons/fa";

const AboutComponent = () => {
    return (
        <div className="about-component">
            <div className="card-container">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="about-card">
                                <div className="about-card__icon">
                                    <FaRocket style={{ fontSize: "26px" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Mission </Card.Title>
                                    <Card.Text>
                                        Saving Nation’s power through
                                        energy-efficient lighting Solutions and
                                        generating employment for the country
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="about-card">
                                <div className="about-card__icon">
                                    <FaEye style={{ fontSize: "26px" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Vision </Card.Title>
                                    <Card.Text>
                                        Reaching out to every District of India
                                        with high-tech, energy-efficient and
                                        environment-friendly lighting systems
                                        and eventually becoming a global brand
                                        working for enlightening the World
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="about-card">
                                <div className="about-card__icon">
                                    <FaRegGem style={{ fontSize: "26px" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Values </Card.Title>
                                    <Card.Text>
                                        Kranti LED lamp’s core values are
                                        Quality, Trust, Innovation & Excellence
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about-section">
                <div className="about-title">
                    <h6>What we do</h6>
                    <h2>About Us</h2>
                </div>
                <Container className="about-container">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <p>
                                Kranti LED Lamps was established in 1995 by the
                                founder Mr Ramakant Mukund Jadhav. Kranti LED
                                Lamps has a history of 25 years of quality and
                                satisfied customers.
                            </p>
                            <p>
                                Driven by the increasing demand for
                                energy-efficient lighting, Kranti LED Lamp is
                                proving to be one of the largest contributors to
                                the ongoing, environmentally-friendly LED
                                revolution…ˀ
                            </p>
                            <Button className="primary_btn" href="/about">
                                Read More
                            </Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutComponent;
