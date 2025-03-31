import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://sahaj-backend-2.vercel.app/api",
  withCredentials: true,
});

export default axiosInstance;
