import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import userApi from "../../services/user";
import * as Helpers from "../../utils/helpers";
import logo from "../../assets/img/logo.png";
import "./style.scss";
import { Messages } from "../../utils/messages";

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

    const findFormError = () => {
        let newError = "";
        if (username.length === "") newError = Messages.usernameInvalid;
        if (password.length === "") newError = Messages.passwordInvalid;
        return newError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newError = findFormError();
        if (newError.length > 0) {
            setMessage(newError);
        } else {
            try {
                const response = await userApi.login(inputs);
                Helpers.saveLocalStorage("access_token", response.access);
                Helpers.saveLocalStorage("refresh_token", response.refresh);
                Helpers.saveLocalStorage("name", inputs.username);
                history.push("/");
            } catch (error) {
                setMessage(Messages.loginFailed);
                setInputs({
                    username: "",
                    password: "",
                });
            }
        }
    };

    return (
        <div className="login-form">
            <Form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form__item">
                    <div className="login-form__item__info">
                        <Link to="/">
                            <img src={logo} alt="Logo"></img>
                        </Link>
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
                            </InputGroup>
                        </Form.Group>

                        <div className="login-form__item__info__msg">
                            <h5>{message}</h5>
                        </div>

                        <Button type="submit" className="login-form__item__info__btnLogin">
                            Login
                        </Button>

                        <div className="login-form__item__info__bd"></div>

                        <div>
                            <p>
                                Don't have an account ? - <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;
