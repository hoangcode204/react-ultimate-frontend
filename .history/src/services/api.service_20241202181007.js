// import axios from "axios";
import axios from "./axios.customizes";
const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="/api/v1/user";
    const accessToken = "";
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
const updateUserAPI=()=>{

}
const fetchAllUserAPI=()=>{
    const URL_BACKEND="/api/v1/user";
    return axios.get(URL_BACKEND);
}
export{
    createUserAPI,updateUserAPI,fetchAllUserAPI
}