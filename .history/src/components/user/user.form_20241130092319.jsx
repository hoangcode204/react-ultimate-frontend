import { Input } from "antd"

const UserForm=()=>{
return(
    <div className="user-form" style={{margin: "20px 0"}}>
             <div style={{display: "flex",gap:"10px",flexDirection}}>
                <div>
                    <span>FullName</span>
                    <Input/>
                </div>
                <div>
                    <span>Email</span>
                    <Input/>
                </div>
                <div>
                    <span>Password</span>
                    <Input/>
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input/>
                </div>
             </div>
    </div>
)
}
export default UserForm