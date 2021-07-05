import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { message } from "antd";

import { UserService } from "../services";
import { saveLocalStorage, isEmail, isValidBirthday } from "../utils/helpers";
import { Messages } from "../utils/messages";
import { OCCUPATIONS } from "../utils/constants";

import "../style/pages/Register.scss";
import logo from "../assets/img/logo.png";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        birthday: "",
        gender: "",
        occupation: "",
    });

    const [messageError, setMessageError] = useState("");
    const { email, username, password, birthday, gender, occupation } = inputs;

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

        if (!isEmail(email)) newError = Messages.emailInvalid;
        if (gender.length === "") newError = Messages.genderInvalid;
        if (occupation.length === "") newError = Messages.occupationInvalid;
        if (!isValidBirthday(birthday)) newError = Messages.birthdayInvalid;

        return newError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newError = findFormError();
        if (newError.length > 0) {
            setMessageError(newError);
        } else {
            try {
                await UserService.register(inputs);

                const loginParams = {
                    username: inputs.username,
                    password: inputs.password,
                };
                const { access, refresh } = await UserService.login(loginParams);
                saveLocalStorage("access_token", access);
                saveLocalStorage("refresh_token", refresh);

                const authenticatedUser = await UserService.getAuthenticatedUser();
                saveLocalStorage("auth", authenticatedUser);

                message.success(Messages.registerSuccess);
                setTimeout(() => {
                    history.push("/");
                }, 500);
            } catch (error) {
                // get first error message
                const [first] = Object.keys(error.response.data);
                const msg = error.response.data[first];
                setMessageError(msg);

                // clear input error field
                setInputs((inputs) => ({
                    ...inputs,
                    [first]: "",
                }));
            }
        }
    };

    return (
        <Form className="register" onSubmit={handleSubmit}>
            <div className="register__wrapper">
                <div className="register__wrapper--inner">
                    <Link to="/">
                        <img src={logo} alt="Logo"></img>
                    </Link>
                    <Form.Group>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group>
                        <InputGroup>
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
                        <InputGroup>
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

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control as="select" name="gender" onChange={handleChange} required>
                                <option value="" label="Select gender" />
                                <option key="M" value="M" label="Male" />
                                <option key="F" value="F" label="Female" />
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Control
                                type="date"
                                placeholder="Birthday"
                                name="birthday"
                                value={birthday}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Control
                            as="select"
                            defaultValue={occupation}
                            name="occupation"
                            onChange={handleChange}
                            options={OCCUPATIONS}
                            required
                        >
                            <option value="" label="Select occupation" />
                            {OCCUPATIONS.map((item, index) => (
                                <option key={index} value={item} label={item} />
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <div className="register__msg">
                        <h5>{messageError}</h5>
                    </div>

                    <Button type="submit" className="register__btn">
                        Register
                    </Button>

                    <div className="register__horizon"></div>

                    <div>
                        <p>
                            Already have an account ? - <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Register;
