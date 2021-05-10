import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Row, FormControl, Button, Form, InputGroup } from "react-bootstrap";
import * as Helpers from "../utils/helpers.js";
import logo from "../assets/img/logo.svg";
import "../style/components/Header.scss";
import userApi from "../services/user.js";
import { useHistory } from "react-router";

function Header() {
    const [username, setUsername] = useState(() => {
        const initUsername = Helpers.getLocalStorage("name");
        return initUsername;
    });
    const [inputSearch, setInputSearch] = useState("");
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await userApi.logout().then();
            Helpers.removeLocalStorage("access_token");
            Helpers.removeLocalStorage("refresh_token");
            setUsername("");
        } catch {
            alert("Logout Failed.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputSearch.length > 0) {
            const searchText = inputSearch.trim().replaceAll(" ", "+");
            history.push(`/search/?q=${searchText}`);
        }
    };

    return (
        <div className="header">
            <Container>
                <Row>
                    <Navbar expand="lg">
                        <Navbar.Brand href="/">
                            <img src={logo} style={{ width: "154px", height: "50px" }} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Movies" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Trending</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">Recommend</Nav.Link>
                            </Nav>
                            <Form inline onSubmit={handleSubmit}>
                                <InputGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Search for a movie....."
                                        className="mr-md-4"
                                        onChange={(e) => {
                                            setInputSearch(e.target.value);
                                        }}
                                    />
                                </InputGroup>
                            </Form>
                            {Helpers.isLogin() ? (
                                <Nav>
                                    <NavDropdown
                                        title={username}
                                        id="basic-nav-dropdown"
                                        className="dropdown-menu-lg-right"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            ) : (
                                <Nav>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Join TMDB</Nav.Link>
                                </Nav>
                            )}
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
