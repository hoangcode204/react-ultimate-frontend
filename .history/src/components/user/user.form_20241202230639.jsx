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
    //   const res=await createUserAPI(fullName,email,password,phone);
    //   if(res.data){
    //     notification.success({
    //         message:"create user",
    //         description:"Tạo user thành công"
    //    })
    //   }else{
    //     notification.error({
    //             message:"Error create user",
    //         description: JSON.stringify(res.message)
    //     })
    //   }
      
    //     console.log(">>check res: ",res.data)
    }
    
return(
    <div className="user-form">
             <div>
                <h3>Table Users</h3>
                <Button 
                       onClick={handleClickBtn}
                       type="primary">Create User</Button>
             </div>
             <Modal title="Basic Modal" 
             open={isModalOpen} 
             onOk={()=>setIsModalOpen(false)}    
             onCancel={()=>setIsModalOpen(false)}
             maskClosable={false}
             okText={''}
             >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
             </Modal>
    </div>
)
}
export default UserForm