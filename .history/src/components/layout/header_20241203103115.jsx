import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Menu } from 'antd';
import { useState } from 'react';
const Header=()=>{
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    };
    const items = [
        {
          label: 'Home',
          key: 'home',
          icon: <MailOutlined />,
        },
        {
          label: 'Users',
          key: 'users',
          icon: <AppstoreOutlined />,
        },
        {
          label: 'Products',
          key: 'products',
          icon: <SettingOutlined />,
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