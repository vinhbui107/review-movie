import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";

import "./style.scss";
import userApi from "../../services/user";
import { genders, msgNotMatchPassword, msgWeakPassword, occupations } from "../../utils/constants";
import { isEqualTwoString, isStrengthPassword } from "../../utils/common";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthday: "",
        gender: "",
        occupation: "",
    });

    const [message, setMessage] = useState("");
    const { email, username, password, confirmPassword, birthday, gender, occupation } = inputs;

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));
    };

    const validateForm = () => {
        return (
            email.length > 0 &&
            username.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            gender.length > 0 &&
            occupation.length > 0
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // check password and confirm password
        if (!isEqualTwoString(password, confirmPassword)) {
            setMessage(msgNotMatchPassword);
            // clear password input
            setInputs({
                ...inputs,
                password: "",
                confirmPassword: "",
            });
            return;
        }

        if (!isStrengthPassword(password)) {
            setMessage(msgWeakPassword);
            // clear password input
            setInputs({
                ...inputs,
                password: "",
                confirmPassword: "",
            });
            return;
        }

        try {
            await userApi.register(inputs);
            alert("Create user successfully.");
            history.push("/login");
        } catch (error) {
            setMessage(error.response.data.detail);
        }
    };

    return (
        <div className="register-form" style={{ backgroundImage: `url("./img/background.jpg")` }}>
            <Form className="register-form" onSubmit={handleSubmit}>
                <div className="register-form__item">
                    <div className="register-form__item__info">
                        <h1>Register</h1>
                        <Form.Group>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                            <Form.Control.Feedback type="invalid">Invalid email</Form.Control.Feedback>
                        </Form.Group>

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
                            <Form.Control.Feedback type="invalid">Invalid email</Form.Control.Feedback>
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

                        <Form.Group>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control as="select" name="gender" onChange={handleChange}>
                                    {genders.map((item, index) => (
                                        <option key={index} value={item} label={item} />
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control
                                    type="date"
                                    placeholder="Birthday"
                                    name="birthday"
                                    value={birthday}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Control
                                as="select"
                                defaultValue={occupation}
                                name="occupation"
                                onChange={handleChange}
                                options={occupations}
                            >
                                {occupations.map((item, index) => (
                                    <option key={index} value={item} label={item} />
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <div className="register-form__item__info__msg">
                            <h5>{message}</h5>
                        </div>

                        <Button
                            variant={!validateForm() ? "secondary" : "primary"}
                            type="submit"
                            className="register-form__item__info__btnLogin"
                            disabled={!validateForm()}
                        >
                            Register
                        </Button>

                        <div className="register-form__item__info__bd"></div>

                        <div>
                            <p>
                                Already have an account ? - <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Register;
