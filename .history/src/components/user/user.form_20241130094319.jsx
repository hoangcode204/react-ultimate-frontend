import { Button, Input } from "antd"
import { useState } from "react"

const UserForm=()=>{
    const [fullName,setFullName]=useState("hoidanit")
return(
    <div className="user-form" style={{margin: "20px 0"}}>
             <div style={{display: "flex",gap:"10px",flexDirection:"column"}}>
                <div>
                    <span>FullName</span>
                    <Input value={fullName}
                        onChange={()}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input/>
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password/>
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input/>
                </div>
                <div>
                    <Button type="primary">Create User</Button>
                </div>
             </div>
    </div>
)
}
export default UserForm