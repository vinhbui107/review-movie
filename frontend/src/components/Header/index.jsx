import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./style.scss";

Header.propTypes = {};

function Header(props) {
    const [searchForm, setSearchForm] = useState(false);

    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Navbar expand="lg">
                            <Navbar.Brand href="#home">
                                <img src="https://react.semantic-ui.com/logo.png" style={{ width: "40px" }} alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Header;
