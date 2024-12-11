import { Button,Input } from "antd"
const RegisterPage=()=>{
    return(
        <div style={{
            margin:"50px",
            display:"flex",
            gap:"15px",
            flexDirection:"column"
        }}>
        <div>
            <span>Full Name</span>
            <Input/>
        </div>
        <div>
            <span>Email</span>
            <Input/>
        </div>
        <div>
            <span>Password</span>
            <Input.Password/>
        </div>
        
        </div>
    )
}
export default RegisterPage