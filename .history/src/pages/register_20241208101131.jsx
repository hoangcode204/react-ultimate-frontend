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
            <span>Full Name</span>
            <Input/>
        </div>
        </div>
    )
}
export default RegisterPage