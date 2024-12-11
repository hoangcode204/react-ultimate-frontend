import { Link, NavLink } from 'react-router-dom'
import {Menu } from 'antd';
import { useState } from 'react';
const Header=()=>{
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    };
    const items

    return (
        <Menu
         onClick={onClick} 
         selectedKeys={[current]} 
         mode="horizontal" 
         items={items} />
    )
}
export default Header