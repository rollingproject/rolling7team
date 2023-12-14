import axios from "axios";
import { API_ADDRESS } from "./constant";

export const axiosInstance = axios.create({
  baseURL: API_ADDRESS,
  header: {
    "Content-Type": "application/json",
  },
});
