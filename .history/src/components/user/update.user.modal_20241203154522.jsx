import {  Input, notification,Modal } from "antd"
import { useEffect, useState } from "react"
import { createUserAPI, updateUserAPI } from "../../services/api.service";
const UpdateUserModal=(props)=>{
    const [fullName,setFullName]=useState("");
    const [id,setId]=useState("");
    const[phone,setPhone]=useState("");
    const{isModalUpdateOpen,setIsModalUpdateOpen,
        dataUpdate,setDataUpdate,
        load
    }=props;
    useEffect(()=>{
         if(dataUpdate){
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
         }
    },[dataUpdate])

    const handleSubmitBtn= async ()=>{
        const res=await updateUserAPI(id,fullName,phone);
        if(res.data){
          notification.success({
              message:"Update user",
              description:"Cập nhật user thành công"
         })
         setIsModalUpdateOpen(false)
        }else{
          notification.error({
                  message:"Error update user",
              description: JSON.stringify(res.message)
          })
        }
      }
      const resetAndCloseModal=()=>{
          setIsModalUpdateOpen(false);
          setFullName("")
          setPhone("")
          setId("")
          setDataUpdate(null)
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
               <span>Id</span>
               <Input
                  value={id}
                  disabled
                  />
        </div>
              <div>
               <span>Full Name</span>
               <Input
                  value={fullName}
                  onChange={(event)=>{setFullName(event.target.value)}}
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