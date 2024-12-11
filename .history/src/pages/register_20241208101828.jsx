import { Button, Input,Form } from "antd";
const RegisterPage = () => {
  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    
  </Form>
    <div
      style={{
        margin: "50px",
        display: "flex",
        gap: "15px",
        flexDirection: "column",
      }}
    >
      <div>
        <span>Full Name</span>
        <Input />
      </div>
      <div>
        <span>Email</span>
        <Input />
      </div>
      <div>
        <span>Password</span>
        <Input.Password />
      </div>
      <div>
        <span>Phoen Number</span>
        <Input />
      </div>
      <div>
        <Button type="primary">Register</Button>
      </div>
    </div>
  );
};
export default RegisterPage;
