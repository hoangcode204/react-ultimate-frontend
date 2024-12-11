// import axios from "axios";
import axios from "./axios.customizes";
const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="/api/v1/user";
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMxOTYxMjcsImV4cCI6MTczMzIzMjEyN30.O0shYlhCmX-aipQpK30fIpEocK3tiwR8HSRaOrSlfVM";
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
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzMxOTYxMjcsImV4cCI6MTczMzIzMjEyN30.O0shYlhCmX-aipQpK30fIpEocK3tiwR8HSRaOrSlfVM";
    return axios.get(URL_BACKEND, {
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
    });
};

export{
    createUserAPI,updateUserAPI,fetchAllUserAPI
}