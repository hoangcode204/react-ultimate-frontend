import axios from "axios";
//set config default
const instance=axios.create({
    baseURL:'http://localhost:'
});
// instance.defaults.headers.common['Authorization']=AUTH_TOKEN;
export default instance;