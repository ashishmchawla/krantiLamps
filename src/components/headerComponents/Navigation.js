import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import logo from "../../theme/images/logo.png";

const Navigation = () => {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        src={logo}
                        alt="Kranti Lamps Logo"
                        fluid
                        style={{ maxWidth: "120px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        {/* <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/download">Download</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
