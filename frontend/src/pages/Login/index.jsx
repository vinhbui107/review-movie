import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import userApi from "../../services/user";

import "./style.scss";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const { username, password } = inputs;
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));
    };

    const validateForm = () => {
        return username.length > 0 && password.length > 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputs);
        if (username && password) {
            userApi.login(inputs);
        }
    };

    return (
        <div className="login-form" style={{ backgroundImage: `url("./img/background.jpg")` }}>
            <Form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form__item">
                    <div className="login-form__item__info">
                        <h1>Login</h1>
                        <Form.Group>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <div className="login-form__item__info__msg">
                            <h5>{message}</h5>
                        </div>

                        <div>
                            <a>Forgot your password ?</a>
                        </div>

                        <Button
                            variant={!validateForm() ? "secondary" : "primary"}
                            type="submit"
                            className="login-form__item__info__btnLogin"
                            disabled={!validateForm()}
                        >
                            Login
                        </Button>

                        <div className="login-form__item__info__bd"></div>

                        <div>
                            <p>
                                Don't have an account? - <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;
