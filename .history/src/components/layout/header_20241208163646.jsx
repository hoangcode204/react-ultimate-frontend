
import { UsergroupAddOutlined, HomeOutlined, AuditOutlined,SettingOutlined } from '@ant-design/icons';
import {Menu } from 'antd';
import { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
const Header=()=>{
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    };
    const items = [
        {
          label: <Link to={"/"}>Home</Link>,
          key: 'home',
          icon: <UsergroupAddOutlined />,
        },
        {
          label: <Link to={"/users"}>User</Link>,
          key: 'users',
          icon: <HomeOutlined/>,
        },
        {
          label: <Link to={"/books"}>Books</Link>,
          key: 'books',
          icon: <AuditOutlined/>,
        },
        {
          label: <Link to={"/books"}>Books</Link>,
          key: 'books',
          icon: <AuditOutlined/>,
        },
        
      ];

    return (
        <Menu
         onClick={onClick} 
         selectedKeys={[current]} 
         mode="horizontal" 
         items={items} />
    )
}
export default Header