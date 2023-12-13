import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rolling-api.vercel.app/2-5/", // 2-7로 바꾸기
});
