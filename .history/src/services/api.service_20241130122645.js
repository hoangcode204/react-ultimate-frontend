import axios from "axios";
const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="http://localhost:8080/api/v1/user";
    
    const data={
        fullName:fullName,
        email:email,
        password:password,
        phone:phone
    }
    axios.post(URL_BACKEND,data,{
        headers: {
            Authorization: `Bearer ${accessToken}` // Thêm access token vào header
        }
})
    console.log(">>check form: ",{fullName,email,password,phone})

}
const updateUserAPI=()=>{

}
export{
    createUserAPI,updateUserAPI
}