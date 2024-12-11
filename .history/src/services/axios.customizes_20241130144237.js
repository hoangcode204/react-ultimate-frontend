import axios from "axios";
//set config default
const instance=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL
});
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
   if(response.data&&response.data.data)
    return response.data;
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response&&error.response.data)
        return error.r
    return Promise.reject(error);
  });
// instance.defaults.headers.common['Authorization']=AUTH_TOKEN;
export default instance;