import {
  UsergroupAddOutlined,
  HomeOutlined,
  AuditOutlined,
  SettingOutlined,
  AliwangwangOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("");
  const { user } = useContext(AuthContext);
  console.log(">>Check data: ", user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/users"}>User</Link>,
      key: "users",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <AuditOutlined />,
    },
    ...(!user.id? [{
      label: <Link to={"/login"}>Đăng nhập</Link>,
      key: "login",
      icon: <LoginOutlined />,
    }]:[]),
    
    {
      label: `Welcome ${user.fullName} `,
      key: "setting",
      icon: <AliwangwangOutlined />,
      children: [
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
