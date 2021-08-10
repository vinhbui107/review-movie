import React from "react";
import { Form, Input, Button, notification } from "antd";

import "../style/components/ChangePasswordForm.scss";
import { UserService } from "../services";
import { Messages } from "../utils/messages";
import { formItemLayout } from "../utils/constants";

function ProfileChangePassword() {
    const [form] = Form.useForm();

    const onFinish = async (inputs) => {
        try {
            const params = {
                new_password: inputs.newPassword,
                current_password: inputs.currentPassword,
            };
            await UserService.changePassword(params);
            form.resetFields();

            notification["success"]({
                message: Messages.updatePasswordSuccess,
            });
        } catch (error) {
            notification["error"]({
                message: Messages.passwordInvalid,
            });
        }
    };

    return (
        <div className="changePassword">
            <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} size="large" scrollToFirstError>
                <Form.Item
                    name="currentPassword"
                    label="Old Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="newPassword"
                    label="New Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                const password = getFieldValue("newPassword");

                                if (!value || password.length >= 10) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error("This password is too short. It must contain at least 10 characters.")
                                );
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm New Password"
                    dependencies={["newPassword"]}
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("newPassword") === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error("The two passwords that you entered do not match!"));
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className="btn-save">
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ProfileChangePassword;
