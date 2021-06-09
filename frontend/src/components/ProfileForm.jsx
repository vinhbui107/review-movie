import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../style/components/ProfileForm.scss";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 24,
    },
};

function onChange(date, dateString) {
    console.log(date, dateString);
}

function ProfileForm() {
    const [form] = Form.useForm();

    const onFinish = () => {};

    return (
        <div className="profile">
            <Form
                {...formItemLayout}
                form={form}
                name="profileForm"
                onFinish={onFinish}
                size="large"
                scrollToFirstError
            >
                <Form.Item label="Username" placeholder="Your username">
                    <Input disabled />
                </Form.Item>

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
                    name="date-picker"
                    label="Birthday"
                    rules={[{ required: true, message: "Please select your birthday!" }]}
                    required
                >
                    <DatePicker
                        onChange={onChange}
                        style={{
                            width: "100%",
                        }}
                        placeholder=""
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: "Please select your gender!" }]}
                >
                    <Select>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="occupation"
                    label="Occupation"
                    rules={[{ required: true, message: "Please select your occupation!" }]}
                >
                    <Select>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="avatar" label="Avatar" valuePropName="fileList">
                    <Upload name="logo" action="/upload.do" listType="picture">
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

export default ProfileForm;
