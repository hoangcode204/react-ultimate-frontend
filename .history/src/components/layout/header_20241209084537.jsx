
import { UsergroupAddOutlined, HomeOutlined, AuditOutlined,SettingOutlined } from '@ant-design/icons';
import {Menu } from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom'
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
          label: 'Cài đặt',
          key: 'setting',
          icon: <SettingOutlined/>,
          children: [
            {
              label:<Link to={"/login"}>Đăng nhập</Link>,
              key:'login',
            },
            {
              label:'Đăng xuất',
              key:'logout',
            }
          ]
          
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