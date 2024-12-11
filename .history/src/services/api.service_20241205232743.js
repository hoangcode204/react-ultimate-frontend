// import axios from "axios";
import axios from "./axios.customizes";
let accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMzODMwMTcsImV4cCI6MTczMzQxOTAxN30.IvxzR3gNMt2VjOcBHQuRIbWO17xip8T-e98t8wJTJ3w"
const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="/api/v1/user";
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMyMzcxMjIsImV4cCI6MTczMzI3MzEyMn0.UYwsBh8wCYYbMQidAWOYpxBerbkPF1OkoXyabMZO_V0";
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
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMyMzcxMjIsImV4cCI6MTczMzI3MzEyMn0.UYwsBh8wCYYbMQidAWOYpxBerbkPF1OkoXyabMZO_V0";
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
const fetchAllUserAPI=()=>{
    const URL_BACKEND="/api/v1/user";
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMyMzcxMjIsImV4cCI6MTczMzI3MzEyMn0.UYwsBh8wCYYbMQidAWOYpxBerbkPF1OkoXyabMZO_V0";
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
    });
};
const deleteUserAPI=(id)=>{
    const URL_BACKEND=`/api/v1/user/${id}`;
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMyMzcxMjIsImV4cCI6MTczMzI3MzEyMn0.UYwsBh8wCYYbMQidAWOYpxBerbkPF1OkoXyabMZO_V0";
    return axios.delete(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
    });
}
const handleUploadFile=(file,folder)=>{
    const URL_BACKEND=`/api/v1/file/upload`;
let config={
    headers: {
        "upload-type": folder,
        "Content-type":"multipart/form-data"

    }
}
    return axios.post(URL_BACKEND,data,config{
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
})
}
export{
    createUserAPI,updateUserAPI,fetchAllUserAPI,
    deleteUserAPI,handleUploadFile
}