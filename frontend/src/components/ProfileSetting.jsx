import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select, Upload, notification, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { formItemLayout, OCCUPATIONS } from "../utils/constants";
import "../style/components/ProfileForm.scss";
import { UserService } from "../services";
import { Messages } from "../utils/messages";

const { Option } = Select;
const moment = require("moment");

function ProfileSetting({ user }) {
    const [form] = Form.useForm();

    const onFinish = async (inputs) => {
        try {
            const params = {
                email: inputs.email,
                birthday: moment(inputs.birthday).format("YYYY-MM-DD"),
                gender: inputs.gender,
                occupation: inputs.occupation,
                username: user.username,
            };
            await UserService.updateUserProfile(params);

            notification["success"]({
                message: Messages.updateProfileSuccess,
            });
        } catch (error) {
            // get first error message
            const [first] = Object.keys(error.response.data);
            const msg = error.response.data[first];

            form.resetFields();

            notification["error"]({
                message: msg,
            });
        }
    };

    function onChangeOccupation(value) {
        form.setFieldsValue({ occupation: value });
    }

    const props = {
        name: "avatar",
        listType: "picture",
        className: "upload-list-inline",
        maxCount: 1,
        beforeUpload(file) {
            const isJPG = file.type === "image/jpeg" || file.type === "image/png";
            if (!isJPG) {
                message.error("You can only upload JPG or PNG file!");
                return false;
            }
            return true;
        },
        customRequest(options) {
            const { onSuccess, file } = options;
            onSuccess(file);
        },
    };

    return (
        <div className="profile">
            <Form
                {...formItemLayout}
                form={form}
                initialValues={{
                    email: user.email,
                    birthday: moment(user.birthday),
                    gender: user.gender,
                    occupation: user.occupation,
                }}
                name="profileForm"
                onFinish={onFinish}
                size="large"
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!",
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="birthday"
                    label="Birthday"
                    rules={[{ required: true, message: "Please select your birthday!" }]}
                    required
                >
                    <DatePicker
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: "Please select your gender!" }]}
                >
                    <Select>
                        <Option value="M">Male</Option>
                        <Option value="F">Female</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="occupation"
                    label="Occupation"
                    rules={[{ required: true, message: "Please select your occupation!" }]}
                >
                    <Select onChange={onChangeOccupation}>
                        {OCCUPATIONS.map((item, index) => (
                            <Option key={index} value={item}>
                                {item}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item name="avatar" label="Avatar">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
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

export default ProfileSetting;
