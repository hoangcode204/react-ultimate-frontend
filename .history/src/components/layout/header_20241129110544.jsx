import { Link } from 'react-router-dom'
import './header.css'
const Header=()=>{
    return (
<ul>
   <li><NaLink className="active" href="#home">Home</NaLink></li>
   <li><Link to="/users">Users</Link></li>
   <li><Link to="/products">Products</Link></li>
</ul>
    )
}
export default Header