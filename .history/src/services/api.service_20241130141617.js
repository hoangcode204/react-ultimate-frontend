// import axios from "axios";
import a
const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="http://localhost:8080/api/v1/user";
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzQ5YzMzZGE1YTE1YWI2ZTQ0NjRlNjUiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzI5MzY3MDIsImV4cCI6MTczMjk3MjcwMn0.0tUhFRI2X47jy_K0N-9f_y7TcgmBJnh1KFPi0gApOew";
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
export{
    createUserAPI,updateUserAPI
}