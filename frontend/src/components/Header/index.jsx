import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { Navbar, Nav, Form, Container, NavDropdown } from "react-bootstrap";
import "antd/dist/antd.css";
import { handleLogin, handleSearchForm, userIcon } from "../../utils/constants";
import { isLogin } from "../../services/user";

Header.propTypes = {};

function Header(props) {
    const [navBackground, setNavBackground] = useState(false);
    const [searchForm, setSearchForm] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="header"
                style={{ transition: "1s ease", backgroundColor: navBackground ? "#232323" : "transparent" }}
            >
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
                            <Nav>{handleLogin()}</Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

export default Header;
