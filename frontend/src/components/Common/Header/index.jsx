import React from "react";
import PropTypes from "prop-types";
/* import { NavbarStyled } from "../../../baseUI/navbar"; */
import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "./style.scss";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { Button } from "reactstrap";
import Search from "antd/lib/input/Search";
import "antd/dist/antd.css";
import Banner from "../Banner";
Header.propTypes = {};

function Header(props) {
  return (
    <>
      {}
      <Banner />
      <div className="header">
        <Container>
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
                <NavLink to="/" className="nav-link nav-link-header">
                  HOMEs
                </NavLink>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavLink to="/login" className="nav-link nav-link-header mr-3">
                  Login
                </NavLink>
              </Nav>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}

export default Header;
