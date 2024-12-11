import { Link } from 'react-router-dom'
import './header.css'
const Header=()=>{
    return (
<ul>
   <li><Link className="active" href="#home">Home</Link></li>
   <li><Link to="/users">Users</Link></li>
   <li><a to="/products">Products</a></li>
</ul>
    )
}
export default Header