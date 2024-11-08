import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_KEY,
  //baseURL: "http://192.168.100.199:4000",
  // baseURL: "http://192.168.100.172:2909",
  baseURL: "https://social.we-matter.xyz/api/v1",
  //   baseURL: import.meta.env.VITE_BACKEND_URL,
});

// console.log(process.env.REACT_APP_API_KEY, "baseURL");
axiosInstance.interceptors.request.use(async (config) => {
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTg0Mjk4MzcsImlzcyI6Imh0dHBzOi8vc29jaWFsLndlLW1hdHRlci54eXoiLCJuYmYiOjE3MTg0Mjk4MzcsInVpZCI6MSwiZW1haWwiOiJkZXZlbG9wZXIwMUB3ZS1tYXR0ZXIuY29tIn0.Kc1raWJUqsNo3h1NGL_LZwPgsfOC0n57qoTRnpgnf_opYc6zbZYJumTJye967U2HkSFVJ5B9oxOQWTvmgnyBng`;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
