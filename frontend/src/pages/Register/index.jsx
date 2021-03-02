import React from "react";
import PropTypes from "prop-types";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

import { Form, Input, Button, Checkbox, Tooltip } from "antd";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
Register.propTypes = {};

function Register(props) {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 16,
        },
    };

    /* const onFinish = (values) => {
    console.log("Success:", values);
  }; */

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

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
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your first name!",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                            {...tailLayout}
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your last name!",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
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
