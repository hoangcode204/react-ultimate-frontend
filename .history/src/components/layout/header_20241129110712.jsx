import { Link, NavLink } from 'react-router-dom'
import './header.css'
const Header=()=>{
    return (
<ul>
   <li><NavLink className="active" href="#home">Home</NavLink></li>
   <li><NavLinkLink to="/users">Users</NavLinkLink></li>
   <li><Link to="/products">Products</Link></li>
</ul>
    )
}
export default Header