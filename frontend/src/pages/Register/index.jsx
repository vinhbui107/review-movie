import React from "react";
import PropTypes from "prop-types";
import { UserOutlined, LockOutlined, MailOutlined, WomanOutlined } from "@ant-design/icons";

import { Form, Input, Button, DatePicker, Cascader } from "antd";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { layout, tailLayout, onFinish, onFinishFailed, config, residences } from "../../utils/constants";

Register.propTypes = {};

function Register(props) {
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
                        <h1>Sign up</h1>
                        <Form.Item
                            {...tailLayout}
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="User name" />
                        </Form.Item>

                        <Form.Item {...tailLayout} className="mb-0">
                            <Row>
                                <Col md="6">
                                    <Form.Item
                                        name="residence"
                                        rules={[
                                            {
                                                type: "array",
                                                required: true,
                                                message: "Please select gender",
                                            },
                                        ]}
                                    >
                                        <Cascader
                                            prefix={<WomanOutlined className="site-form-item-icon" />}
                                            options={residences}
                                            placeholder="Gender"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md="6">
                                    <Form.Item
                                        className="text-light birthdayForm"
                                        style={{ width: "150%" }}
                                        {...tailLayout}
                                        name="date-picker"
                                        {...config}
                                    >
                                        <DatePicker placeholder="Birthday" style={{ marginLeft: "0" }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item
                            {...tailLayout}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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

                        <Form.Item
                            {...tailLayout}
                            name="confirm"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("The two passwords that you entered do not match!")
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="confirm"
                                placeholder="Confirm Password"
                            />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" className="login-form__item__info__btnSignup">
                                Sign up
                            </Button>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <div className="text-center">
                                <p>By signing up, you agree to our</p>
                                <a href="/">Term of use</a>
                                <p>
                                    <i class="fa fa-arrow-left"></i>
                                    <Link to="/login" className="text-light ml-4">
                                        Back to your signin
                                    </Link>
                                </p>
                            </div>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </Form>
    );
}

export default Register;
