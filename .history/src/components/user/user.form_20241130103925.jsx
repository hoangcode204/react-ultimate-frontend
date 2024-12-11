import { Button, Input } from "antd"
import axios from "axios";
import { useState } from "react"

const UserForm=()=>{
    const [fullName,setFullName]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzQ5YzMzZGE1YTE1YWI2ZTQ0NjRlNjUiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzI5MzY3MDIsImV4cCI6MTczMjk3MjcwMn0.0tUhFRI2X47jy_K0N-9f_y7TcgmBJnh1KFPi0gApOew";

    const handleClickBtn=()=>{
        const URL_BACKEND="http://localhost:8080/api/v1/user";
        const data={
            fullName:fullName,
            email:email,
            password:password,
            phone:phone
        }
        axios.post(URL_BACKEND,data,
            headers: {
                Authorization: `Bearer ${accessToken}` // Thêm access token vào header
            }
        )
        console.log(">>check form: ",{fullName,email,password,phone})
    }
    
return(
    <div className="user-form" style={{margin: "20px 0"}}>
             <div style={{display: "flex",gap:"10px",flexDirection:"column"}}>
                <div>
                    <span>FullName</span>
                    <Input 
                        value={fullName}
                        onChange={(event)=>setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input 
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password 
                        value={password}
                        onChange={(event)=>setPassWord(event.target.value)}
                    />
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input 
                        value={phone}
                        onChange={(event)=>setPhone(event.target.value)}
                    />
                </div>
                <div>
                    <Button
                    onClick={handleClickBtn}
                    // onClick={()=>handleClickBtn()} truyền arrow funtion
                     type="primary">Create User</Button>
                </div>
             </div>
    </div>
)
}
export default UserForm