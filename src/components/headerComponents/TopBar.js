import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
    return (
        <Container className="top-bar" fluid>
            <Row>
                <Col lg={{ span: 4, offset: 8 }} sm={{ span: 12 }}>
                    <div className="top-bar__items">
                        <a className="top-bar__item" href="tel:0251 2580074">
                            <FaPhoneAlt className="top-bar__item__icon" />
                            0251-2580074
                        </a>
                        <a
                            className="top-bar__item"
                            href="mailto:info@krantilamps.com"
                        >
                            <FaEnvelope className="top-bar__item__icon" />
                            info@krantilamps.com
                        </a>
                        <a className="top-bar__item" href="google.com">
                            <FaMapMarkerAlt className="top-bar__item__icon" />
                            Kalyan
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopBar;
