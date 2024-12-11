import axios from "./axios.customizes";

// Helper function for setting Authorization header
const getAuthHeaders = () => {
  const accessToken =
    typeof window !== "undefined" &&
    window.localStorage.getItem("access_token");
  return accessToken
    ? { Authorization: `Bearer ${accessToken}` }
    : {};
};

// User APIs
const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { fullName, email, password, phone };
  return axios.post(URL_BACKEND, data, { headers: getAuthHeaders() });
};

const updateUserAPI = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { _id, fullName, phone };
  return axios.put(URL_BACKEND, data, { headers: getAuthHeaders() });
};

const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { _id, avatar, fullName, phone };
  return axios.put(URL_BACKEND, data, { headers: getAuthHeaders() });
};

const fetchAllUserAPI = (current, pageSize) => {
  const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_BACKEND, { headers: getAuthHeaders() });
};

const deleteUserAPI = (id) => {
  const URL_BACKEND = `/api/v1/user/${id}`;
  return axios.delete(URL_BACKEND, { headers: getAuthHeaders() });
};

// File Upload API
const handleUploadFile = (file, folder) => {
  const URL_BACKEND = "/api/v1/file/upload";
  const config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
      ...getAuthHeaders(),
    },
  };

  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);

  return axios.post(URL_BACKEND, bodyFormData, config);
};

// Auth APIs
const registerUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = { fullName, email, password, phone };
  return axios.post(URL_BACKEND, data, { headers: getAuthHeaders() });
};

const loginAPI = (email, password) => {
  const URL_BACKEND = "/api/v1/auth/login";
  const data = { username: email, password, delay: 2000 };
  return axios.post(URL_BACKEND, data, { headers: getAuthHeaders() });
};

export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
  handleUploadFile,
  updateUserAvatarAPI,
  registerUserAPI,
  loginAPI,
};
