import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';
const UserPage=()=>{
    const [dataUsers,setDataUsers]=useState([]);
    useEffect(()=>{
      loadUser();
    },[]);
    const loadUser=async()=>{ //hàm bất đồng bộ để gọi API
        const res=await fetchAllUserAPI()//chờ kết quả trả về từ API
        setDataUsers(res.data)//cập nhật danh sách người dùng
      }
    return(
              
           <div style={{ padding: "20px"}}>
           <UserForm loadUser={loadUser}/>
            <UserTable dataUsers={dataUsers}
              loadUser={loadUser}
            />
           </div>
        
    )
}
export default UserPage