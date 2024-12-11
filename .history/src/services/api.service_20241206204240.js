// import axios from "axios";
import axios from "./axios.customizes";
let accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM0NjE1NzUsImV4cCI6MTczMzQ5NzU3NX0.h6Y6peCFQaovb8b-kDAAvaZ8tjqF-jl5uUtpxmW5Kxc"
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
const updateUserAvatarAPI=(_id,avatar)=>{
    const URL_BACKEND="/api/v1/user";
   
    const data={
        _id:_id,
        avatar:avatar
    }
   return axios.put(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
}
const fetchAllUserAPI=()=>{
    const URL_BACKEND="/api/v1/user";
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

export{
    createUserAPI,updateUserAPI,fetchAllUserAPI,
    deleteUserAPI,handleUploadFile,updateUserAvatarAPI
}