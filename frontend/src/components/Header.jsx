import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import logo from "../assets/img/logo.svg";
import userApi from "../services/user.js";
import "../style/components/Header.scss";
import * as Helpers from "../utils/helpers.js";

function Header() {
    const [currentUser, setCurrentUser] = useState({
        username: "",
    });
    const [inputSearch, setInputSearch] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (Helpers.isLogin()) {
            async function fetchData() {
                const response = await userApi.getCurrentUser();
                Helpers.saveLocalStorage("currentUser", response);
                setCurrentUser({
                    username: response.username,
                });
            }
            fetchData();
        }
    }, []);

    const handleLogout = async () => {
        try {
            await userApi.logout().then();
            Helpers.removeAuth();
            setCurrentUser({});
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
                                    <NavDropdown.Item href="/">Popular</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Top Rated</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Recommend</Nav.Link>
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
                                        title={currentUser.username}
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
