import React from "react";
import PropTypes from "prop-types";

import { Form, Input, Button, Checkbox, Tooltip } from "antd";
// import "../../components/Common/Header/node_modules/antd/dist/antd.css";
import "./style.scss";
import { NavLink } from "react-router-dom";
Login.propTypes = {};

function Login(props) {
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
      offset: 6,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const bgForm = {
    position: "absolute",
    zIndex: "10",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/a262f479-9909-42bf-925f-a204769ea611/VN-en-20210222-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-form"
        style={bgForm}
      >
        <NavLink to="/">
          <img
            src="./img/logo.svg"
            style={{ background: "red", padding: "10px" }}
            alt=""
          />
        </NavLink>

        <div className="login-form">
          <div className="login-form__item">
            <div className="login-form__item__info">
              <h1 style={{ textAlign: "center", margin: "20px 0 50px" }}>
                Login
              </h1>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
                <Tooltip title="Useful information">
                  <a href="#API" style={{ margin: "0 8px" }}>
                    Forgot Password?
                  </a>
                </Tooltip>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <span>New to Netflix? Or</span> <a href="/">register now!</a>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Login;
