// import axios from "axios";
import axios from "./axios.customizes";
let accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM2Njk3NTIsImV4cCI6MTczMzcwNTc1Mn0.OVUTHea2trZ8M4udiXganvileJg2jNH0MKS5CfLKSyE"
const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="/api/v1/user";
    
    const data={
        fullName:fullName,
        email:email,
        password:password,
        phone:phone
    }
   return axios.post(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
  
}
const updateUserAPI=(_id,fullName,phone)=>{
    const URL_BACKEND="/api/v1/user";
   
    const data={
        _id:_id,
        fullName:fullName,
        phone:phone
    }
   return axios.put(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
}
const updateUserAvatarAPI=(avatar,_id,fullName,phone)=>{
    const URL_BACKEND="/api/v1/user";
    const data={
        _id: _id,
        avatar:avatar,
        fullName:fullName,
        phone:phone
    }
   return axios.put(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
}
const fetchAllUserAPI=(current,pageSize)=>{
    const URL_BACKEND=`/api/v1/user?current=${current}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
    });
};
const deleteUserAPI=(id)=>{
    const URL_BACKEND=`/api/v1/user/${id}`;
    
    return axios.delete(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
    });
}
const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `/api/v1/file/upload`;

    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data", // Chữ 'Content-Type' đúng chuẩn (có phân biệt hoa thường)
            Authorization: `Bearer ${accessToken}`
        }
    };

    // Tạo form data
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);

    // Gửi request POST
    return axios.post(URL_BACKEND, bodyFormData, config); // Đảm bảo config ở đúng vị trí tham số thứ ba
};
const registerUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="/api/v1/user";
    
    const data={
        fullName:fullName,
        email:email,
        password:password,
        phone:phone
    }
   return axios.post(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
}
const loginAPI=(email,password)=>{
    const URL_BACKEND="/api/v1/auth/login";
   
    const data={
       username: email,
       password: password,
       de
    }
   return axios.post(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
}

export{
    createUserAPI,updateUserAPI,fetchAllUserAPI,
    deleteUserAPI,handleUploadFile,updateUserAvatarAPI,
    registerUserAPI,loginAPI
}