import { Button, Input, Form } from "antd";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(">>check values: ", values);
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
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
              message: "Please input your fullname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
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
              message: "Please input your fullname!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="PhoneNumber"
          name="phone"
          rules={[
            {
              pattern: new RegExp(/\d+/g),
              message: "Wrong format!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button onClick={() => form.submit()} type="primary">
          Register
        </Button>
      </div>
    </Form>
  );
};
export default RegisterPage;
