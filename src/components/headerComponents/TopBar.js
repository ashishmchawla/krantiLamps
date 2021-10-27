import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
    return (
        <Container className="top-bar">
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                    <div className="top-bar__inline_items">
                        <FaPhoneAlt />
                        0251-2580074
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopBar;
