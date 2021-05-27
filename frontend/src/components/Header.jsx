import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Avatar, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import logo from "../assets/img/logo.svg";
import userApi from "../services/user.js";
import "../style/components/Header.scss";
import { GENRES } from "../utils/constants";
import * as Helpers from "../utils/helpers.js";

function Header() {
    const [currentUser, setCurrentUser] = useState(Helpers.getLocalStorage("currentUser"));
    const [inputSearch, setInputSearch] = useState("");
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await userApi.logout().then();
            Helpers.removeAuth();
            setCurrentUser({});
        } catch {
            notification["warning"]({
                message: "Logout Failed!",
            });
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
                            <img src={logo} style={{ width: "140px", height: "40px" }} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Genres" id="basic-nav-dropdown">
                                    {GENRES.map((genre, index) => {
                                        return (
                                            <NavDropdown.Item href={`/genres/${genre}`} key={index}>
                                                {genre}
                                            </NavDropdown.Item>
                                        );
                                    })}
                                </NavDropdown>
                                <Nav.Link href="/recommend">Recommend</Nav.Link>
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
                                        title={
                                            <>
                                                <Avatar size="small" icon={<UserOutlined />} src={currentUser.avatar} />
                                                <span style={{ marginLeft: "5px" }}>{currentUser.username}</span>
                                            </>
                                        }
                                        id="basic-nav-dropdown"
                                        className="dropdown-menu-lg-right"
                                    >
                                        <NavDropdown.Item href={`/users/${currentUser.username}`}>
                                            Profile
                                        </NavDropdown.Item>
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
