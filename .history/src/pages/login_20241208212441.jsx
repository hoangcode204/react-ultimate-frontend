import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
const LoginPage = () => {
  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px soild #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Đăng nhập</legend>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email không được để trống",
                },
                {
                    type:"email",
                    message:'Email không đúng định dạng!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email không được để trống",
                },
                {
                    type:"email",
                    message:'Email không đúng định dạng!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </fieldset>
      </Col>
    </Row>
  );
};
export default LoginPage;
