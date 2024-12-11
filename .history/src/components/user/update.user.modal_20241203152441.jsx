import {  Input, notification,Modal } from "antd"
import { useEffect, useState } from "react"
import { createUserAPI } from "../../services/api.service";
const UpdateUserModal=(props)=>{
    const [fullName,setFullName]=useState("");
    const [password,setPassWord]=useState("");
    const [email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const{isModalUpdateOpen,setIsModalUpdateOpen,dataUpdate,setDataUpdate}=props;
    useEffect(()=>{
         if(dataUpdate)
    },[dataUpdate])

    const handleSubmitBtn= async ()=>{
        const res=await createUserAPI(fullName,email,password,phone);
        if(res.data){
          notification.success({
              message:"create user",
              description:"Tạo user thành công"
         })
         setIsModalUpdateOpen(false)
        //  await loadUser();
        }else{
          notification.error({
                  message:"Error create user",
              description: JSON.stringify(res.message)
          })
        }
      }
      const resetAndCloseModal=()=>{
          setIsModalUpdateOpen(false);
          setFullName("")
          setEmail("")
          setPassWord("")
          setPhone("")
      }    
    return(
        <Modal title="Update User" 
        open={isModalUpdateOpen} 
        onOk={()=>handleSubmitBtn()}    
        onCancel={()=>resetAndCloseModal()}
        maskClosable={false}
        okText={"SAVE"}
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
    )
}
export default UpdateUserModal