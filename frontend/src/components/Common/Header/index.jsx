import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
/* import { NavbarStyled } from "../../../baseUI/navbar"; */
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { Navbar, Nav, Form, FormControl, Container, NavDropdown, Button } from "react-bootstrap";
import "antd/dist/antd.css";
import Banner from "../Banner";
import { MDBCol, MDBInput } from "mdbreact";

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

  const handleSearchForm = () => {
    return searchForm ? "search__form__click" : "";
  };

  return (
    <>
      <Banner />
      <div
        className="header"
        style={{ transition: "1s ease", backgroundColor: navBackground ? "#000" : "transparent" }}
      >
        <Container>
          <Navbar expand="lg" variant="light">
            <Navbar.Brand href="#home">
              <img src="./img/logo.svg" style={{ position: "relative", bottom: "5px", right: "15px" }} alt="" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/" className="nav-link nav-link-header">
                  HOME
                </NavLink>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Form inline className={` ${handleSearchForm()} form__search flex-nowrap mx-4`}>
                <i className="fa fa-search mr-2" onClick={() => setSearchForm(!searchForm)} />
                <input type="text" placeholder="Search" className="form__search__custom pl-0" />
              </Form>
              <Nav>
                <NavLink to="/login" className="nav-link nav-link-header mr-3">
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default Header;
