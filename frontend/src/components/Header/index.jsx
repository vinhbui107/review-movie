import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./style.scss";

Header.propTypes = {};

function Header(props) {
    const [searchForm, setSearchForm] = useState(false);

    useEffect(() => {}, []);

    const handleSearchForm = (searchForm) => {
        return searchForm ? "search__form__click" : "";
    };

    return (
        <>
            <div className="header">
                <div
                    className={`${searchForm ? "header__overlay" : ""}`}
                    onClick={() => {
                        setSearchForm();
                        console.log(searchForm);
                    }}
                ></div>
                <Container fluid>
                    <Navbar expand="lg" variant="light">
                        <Navbar.Brand href="#home">
                            <img
                                src="./img/logo.svg"
                                style={{ position: "relative", bottom: "5px", right: "15px" }}
                                alt=""
                            />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Categories" id="basic-nav-dropdown" className="dropdown--custom">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>

                                <NavLink to="/" className="nav-link nav-link-header">
                                    Trending
                                </NavLink>
                            </Nav>

                            <Form inline className={` ${handleSearchForm(searchForm)} form__search flex-nowrap mx-4`}>
                                <i className="fa fa-search mr-2" onClick={() => setSearchForm(!searchForm)} />
                                <input type="text" placeholder="Search" className="form__search__custom pl-0" />
                            </Form>

                            {/* user profile */}
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

export default Header;
