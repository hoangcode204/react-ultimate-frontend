import { Button, Input, notification } from "antd"
// import axios from "axios";
import { useState } from "react"
import { createUserAPI } from "../../services/api.service";

const UserForm=()=>{
    const [fullName,setFullName]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    const[phone,setPhone]=useState("");


    const handleClickBtn= async ()=>{
      const res=await createUserAPI(fullName,email,password,phone);
      if(res.data){
        notification.success({
            message:"create user",
            description:"Tạo user thành công"
       })
      }else{
        notification.error({
                message:"Error create user",
            description: JSON.stringify(res.message)
        })
      }
      
        console.log(">>check res: ",res.data)
    }
    
return(
    <div className="user-form">
             <div >
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