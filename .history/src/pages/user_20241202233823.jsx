import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
const UserPage=()=>{
    const [dataUsers,setDataUsers]=useState([]);
    useEffect(()=>{
      console.log("run useEffect 111")
      loadUser();
    },[]);
    return(
              
           <div style={{ padding: "20px"}}>
           <UserForm/>
            <UserTable/>
           </div>
        
    )
}
export default UserPage