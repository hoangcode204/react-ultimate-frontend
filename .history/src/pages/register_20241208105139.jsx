import { Button, Input, Form } from "antd";
const RegisterPage = () => {
  return (
    <Form
    layout="vertical"
    >
      <div
        style={{
          margin: "50px",
        //   display: "flex",
        //   gap: "15px",
        //   flexDirection: "column",
        }}
      >
      <Form.Item
      label="Fullname"
      name="fullname"
      rules={[
        {
          required: true,
          message: 'Please input your fullname!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="PhoneNumber"
      name="phone"
    >
      <Input />
    </Form.Item>
        <div>
          <Button type="primary">Register</Button>
        </div>
      </div>
    </Form>
  );
};
export default RegisterPage;
