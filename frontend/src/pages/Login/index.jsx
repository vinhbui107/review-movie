import React from "react";
import PropTypes from "prop-types";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, Button, Checkbox, Tooltip } from "antd";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { layout, tailLayout, onFinish, onFinishFailed } from "../../utils/constants";

Login.propTypes = {};

function Login(props) {
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="login-form"
        >
            <div className="login-form">
                <div className="login-form__item">
                    <div className="login-form__item__info">
                        <h1>Login</h1>
                        <Form.Item
                            {...tailLayout}
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            {...tailLayout}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>
                                <p>Remember me ?</p>
                            </Checkbox>
                            <Tooltip title="Useful information">
                                <a href="#API" style={{ margin: "0 8px" }}>
                                    Forgot Password?
                                </a>
                            </Tooltip>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" className="login-form__item__info__btnLogin">
                                Log in
                            </Button>
                            <p>Or Sign in with</p>
                            <Link to="/" className="login-form__item__info__icons">
                                <i class="fab fa-google"></i>
                                <i class="fab fa-facebook-f"></i>
                            </Link>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <p>Don't have a account? </p> <Link href="/register">Sign up</Link>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </Form>
    );
}

export default Login;
