// import axios from "axios";
import axios from "./axios.customizes";
let accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzRkZTE1Y2FiYzI4ZDQ1NDdjNjBiYzAiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzM4ODU0OTYsImV4cCI6MTczMzkyMTQ5Nn0.eZtzCJ44EJOhcoXffjzTZv7hg6lLP5rj6lLU13VfaNA";
const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const createBookAPI = (
  mainText,
  author,
  price,
  quantity,
  category,
  thumbnail
) => {
  const URL_BACKEND = "/api/v1/book";

  const data = {
    mainText: mainText,
    author: author,
    price: price,
    quantity: quantity,
    category: category,
    thumbnail: thumbnail,
  };
  return axios.post(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const updateUserAPI = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";

  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const updateUserAvatarAPI = (avatar, _id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const updateBookThumbnailAPI = (
  thumbnail,
  mainText,
  author,
  price,
  quantity,
  sold,
  category
) => {
  const URL_BACKEND = "/api/v1/book";
  const data = {
    thumbnail: thumbnail,
    mainText: mainText,
    author: author,
    price: price,
    quantity: quantity,
    sold: sold,
    category: category,
  };
  return axios.put(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const fetchAllUserAPI = (current, pageSize) => {
  const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_BACKEND, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const fetchAllBookAPI = (current, pageSize) => {
  const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_BACKEND);
};
const deleteUserAPI = (id) => {
  const URL_BACKEND = `/api/v1/user/${id}`;

  return axios.delete(URL_BACKEND, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const deleteBookAPI = (id) => {
  const URL_BACKEND = `/api/v1/book/${id}`;

  return axios.delete(URL_BACKEND, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const handleUploadFile = (file, folder) => {
  const URL_BACKEND = `/api/v1/file/upload`;

  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data", // Chữ 'Content-Type' đúng chuẩn (có phân biệt hoa thường)
      Authorization: `Bearer ${accessToken}`,
    },
  };

  // Tạo form data
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);

  // Gửi request POST
  return axios.post(URL_BACKEND, bodyFormData, config); // Đảm bảo config ở đúng vị trí tham số thứ ba
};
const registerUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";

  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const loginAPI = (email, password) => {
  const URL_BACKEND = "/api/v1/auth/login";

  const data = {
    username: email,
    password: password,
    delay: 2000,
  };
  return axios.post(URL_BACKEND, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
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
  fetchAllBookAPI,
  deleteBookAPI,
  updateBookThumbnailAPI,
  createBookAPI,
};
