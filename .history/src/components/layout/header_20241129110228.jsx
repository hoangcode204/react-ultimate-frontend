import './header.css'
const Header=()=>{
    return (
<ul>
   <li><Link className="active" href="#home">Home</Link></li>
   <li><a href="/users">Users</a></li>
   <li><a href="/products">Products</a></li>
</ul>
    )
}
export default Header