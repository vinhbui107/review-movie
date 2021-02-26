import React from "react";
import PropTypes from "prop-types";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, Button, Checkbox, Tooltip } from "antd";
import "./style.scss";
import { NavLink } from "react-router-dom";
Login.propTypes = {};

function Login(props) {
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
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
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
              <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                Log in
              </Button>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <p>New to Netflix? Or</p> <a href="/">register now!</a>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Login;
