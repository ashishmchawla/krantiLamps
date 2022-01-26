import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FloatingLabel,
    Button,
    Toast,
    ToastContainer,
    Alert,
} from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { recordEntry } from "../../axios/contactForm";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    async function triggerSubmit() {
        if (name.length > 0 && email.length > 0 && message.length > 0) {
            const response = await recordEntry(name, email, message);
            if (response && response === 1) {
                setFormSubmitted(true);
            } else {
                setShow(true);
            }
        } else {
            setShow2(true);
        }
    }

    const onInputName = ({ target: { value } }) => {
        setName(value);
    };
    const onInputEmail = ({ target: { value } }) => {
        setEmail(value);
    };
    const onInputMessage = ({ target: { value } }) => {
        setMessage(value);
    };
    return (
        <div className="contact">
            <div className="contact__heading">
                <h6>Where are we</h6>
                <h2>Contact Us</h2>
            </div>
            <div className="contact__content">
                <Container>
                    <Row>
                        <Col lg={4} sm={12}>
                            <div className="contact__content__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1342.1905869659822!2d73.15230206090054!3d19.21393583585121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79597b698ca81%3A0x422f5592f2427a66!2sKranti%20Led%20Lamp!5e0!3m2!1sen!2sin!4v1635587670844!5m2!1sen!2sin"
                                    width="500"
                                    title="Location"
                                    height="400"
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </Col>

                        <Col lg={{ span: 7, offset: 1 }} sm={12}>
                            <ToastContainer
                                className="p-3"
                                position="bottom-end"
                            >
                                <Toast
                                    onClose={() => setShow(false)}
                                    show={show}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header>
                                        <strong className="me-auto">
                                            Warning!
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Something went wrong, please try again.
                                    </Toast.Body>
                                </Toast>{" "}
                                <Toast
                                    onClose={() => setShow2(false)}
                                    show={show2}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header>
                                        <strong className="me-auto">
                                            Error!
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Please fill the form
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <Container>
                                <div className="address">
                                    <div className="address__main">
                                        <Row>
                                            <Col
                                                lg={1}
                                                className="address__main__icon__section"
                                            >
                                                <FaMapMarkerAlt className="address__main__icon" />
                                            </Col>
                                            <Col
                                                lg={11}
                                                className="address__main__content__section"
                                            >
                                                <p className="address__main__content">
                                                    Ramakant Industrial estate,
                                                    <br /> B-11, Anand Nagar,
                                                    <br /> Ashele Pada,
                                                    <br />
                                                    Ulhasnagar -421004
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="address__phone">
                                        <a href="tel:0251 2580074">
                                            <Row>
                                                <Col
                                                    lg={1}
                                                    className="address__main__icon__section"
                                                >
                                                    <FaPhoneAlt className="address__phone__icon" />
                                                </Col>
                                                <Col
                                                    lg={11}
                                                    className="address__main__content__section"
                                                >
                                                    0251-2580074{" "}
                                                </Col>
                                            </Row>
                                        </a>
                                    </div>
                                </div>
                            </Container>
                            <hr />
                            <div className="contact__form">
                                {formSubmitted === false ? (
                                    <Container>
                                        <h6>Let us contact you</h6>
                                        <Row>
                                            <Col lg={6} sm={12}>
                                                <>
                                                    <FloatingLabel
                                                        controlId="floatingInput"
                                                        label="Name"
                                                    >
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder="Name"
                                                            onChange={
                                                                onInputName
                                                            }
                                                        />
                                                    </FloatingLabel>
                                                </>
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <>
                                                    <FloatingLabel
                                                        controlId="floatingEmail"
                                                        label="Email"
                                                    >
                                                        <Form.Control
                                                            required
                                                            type="email"
                                                            placeholder="Email"
                                                            onChange={
                                                                onInputEmail
                                                            }
                                                        />
                                                    </FloatingLabel>
                                                </>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12} sm={12}>
                                                <FloatingLabel
                                                    controlId="floatingMessage"
                                                    label="Leave a comment here"
                                                >
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Leave a comment here"
                                                        style={{
                                                            height: "100px",
                                                        }}
                                                        onChange={
                                                            onInputMessage
                                                        }
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Button
                                            type="submit"
                                            onClick={triggerSubmit}
                                        >
                                            Send
                                        </Button>
                                    </Container>
                                ) : (
                                    <div className="form__success">
                                        <Alert variant="success">
                                            We got your message, we'll reach out
                                            to you soon.
                                        </Alert>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
