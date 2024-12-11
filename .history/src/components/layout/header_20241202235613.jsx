import { Link, NavLink } from 'react-router-dom'
import {Menu } from 'antd';
const Header=()=>{
    return (
        <Menu
         onClick={onClick} 
         selectedKeys={[current]} 
         mode="horizontal" items={items} />;
    )
}
export default Header