import { Button, Input, Form, notification,Row,Coloumn } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate=useNavigate();
  const onFinish =async (values) => {
    console.log(">>check values: ", values);
          const res=await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone);
    if(res.data){
        notification.success({
            message:"Register User",
            description:"Đăng ký user thành công"
        })
        navigate("/login")
    }else{
        notification.error({
            message:"Register User error",
            description:JSON.stringify(res.message)
        })
    }
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
    <Row>
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
          name="fullName"
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
              required: true,
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
    </Row>

    </Form>
  );
};
export default RegisterPage;
