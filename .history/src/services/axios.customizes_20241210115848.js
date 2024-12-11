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
//gán token vào header với interceptor
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  if (typeof window !== "undefined" && window && window.localStorage &&
  window.localStorage.getItem('access_token')) {
  config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('access_token');
  }
  // Do something before request is sent
  return config;
  }, function (error) {
  // Do something with request error
  return Promise.reject(error);
  });
// instance.defaults.headers.common['Authorization']=AUTH_TOKEN;
export default instance;