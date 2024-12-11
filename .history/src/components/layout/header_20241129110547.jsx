import { Link, NavLink } from 'react-router-dom'
import './header.css'
const Header=()=>{
    return (
<ul>
   <li><NavLinkLink className="active" href="#home">Home</NavLink></li>
   <li><Link to="/users">Users</Link></li>
   <li><Link to="/products">Products</Link></li>
</ul>
    )
}
export default Header