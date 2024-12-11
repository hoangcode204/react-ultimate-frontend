import axios from "axios";
//set config default
const instance=axios.create({
    baseURL:'https://api.example.com'
});
// instance.defaults.headers.common['Authorization']=AUTH_TOKEN;
export default instance;