import axios from "axios";
//set config default
const instance=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL
});
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// Add a response interceptor
instance.interceptors.response.use(function (response) {
   if(response.data&&response.data.data)
    return response.data;
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response&&error.response.data)
        return error.response.data;
    return Promise.reject(error);
  });
// instance.defaults.headers.common['Authorization']=AUTH_TOKEN;
export default instance;