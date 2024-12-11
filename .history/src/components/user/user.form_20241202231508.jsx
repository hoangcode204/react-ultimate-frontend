import { Button, Input, notification,Modal } from "antd"
import { useState } from "react"
import { createUserAPI } from "../../services/api.service";


const UserForm=()=>{
    const [fullName,setFullName]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[isModalOpen,setIsModalOpen]=useState(true);

    const handleClickBtn= async ()=>{
    }
    
return(
    <div className="user-form" style={{ margin:"10px 0"}}>
             <div>
                <h3>Table Users</h3>
                <Button 
                       onClick={()=>setIsModalOpen(true)}
                       type="primary">Create User</Button>
             </div>
             <Modal title="Create User" 
             open={isModalOpen} 
             onOk={()=>setIsModalOpen(false)}    
             onCancel={()=>setIsModalOpen(false)}
             maskClosable={false}
             okText={"CREATE"}
             >
              <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
                   <div>
                    <span>Full Name</span>
                    <Input
                       value={fullName}
                       onChange={(event)=>{setFullName(event.target.value)}}
                       />
                   </div>
                   <div>
                    <span>Email</span>
                    <Input
                       value={email}
                       onChange={(event)=>{setEmail(event.target.value)}}
                       />
                   </div>
                   <div>
                    <span>Password</span>
                    <Input.Password
                       value={password}
                       onChange={(event)=>{setPassWord(event.target.value)}}
                       />
                   </div>
                   <div>
                    <span>Phone Number</span>
                    <Input
                       value={phone}
                       onChange={(event)=>{setPhone(event.target.value)}}
                       />
                   </div>
              </div>
             </Modal>
    </div>
)
}
export default UserForm