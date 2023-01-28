import axiosLibrary from "axios";

const axios = axiosLibrary.create({
  baseURL: process.env.URL_BACKEND,
  timeout: 300000,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
