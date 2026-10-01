
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from "../../assets/logo.png"
import React, { useEffect, useState } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Navbar
            expand="lg"
            sticky="top"
            className={`navbar-dark ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo1}
                        alt="Logo"
                        style={{
                            height: "50px",
                            objectFit: "contain"
                        }}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav
                        activeKey="/home"
                        className="align-items-start align-items-lg-center gap-2"
                    >
                        <Nav.Item>
                            <Nav.Link
                                className="text-white hover-red"
                                eventKey="1"
                                href="#home"
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                className="text-white hover-red"
                                eventKey="2"
                                href="#services"
                            >
                                Services
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                className="text-white hover-red"
                                eventKey="3"
                                href="#about"
                            >
                                About
                            </Nav.Link>
                        </Nav.Item>

                        <NavDropdown
                            className="custom-nav-dropdown"
                            title="Pages"
                            id="nav-dropdown"
                        >
                            <NavDropdown.Item eventKey="4.1">
                                Pages
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="4.2">
                                Another action
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="4.3">
                                Something else here
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item eventKey="4.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link
                                className="text-white hover-red"
                                eventKey="4"
                                href="#testimonials"
                            >
                                Testimonials
                            </Nav.Link>
                        </Nav.Item>

                        <a
                            href="#contact"
                            className="btn btn-success fw-bold ms-lg-2 my-2 my-lg-0 target-btn"
                        >
                            Contact Support
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header