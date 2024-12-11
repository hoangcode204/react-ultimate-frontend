import { Button, Input, Form, notification,Row,Col,Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate,Link } from "react-router-dom";
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
        <Row justify={"center"}>
        <Col xm={24} md={6}>
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
      </Col>
        </Row>
      <Row>
      <Col xm={24} md={6}>
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
      </Col>
      </Row>
   <Row>
   <Col xm={24} md={6}>
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
      </Col>
   </Row>
    <Row>
    <Col xm={24} md={6}>
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
      </Col>
    </Row>
        <Button onClick={() => form.submit()} type="primary">
          Register
        </Button>
    </Form>
  );
};
export default RegisterPage;
