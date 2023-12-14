import axios from "axios";
import { API_ADDRESS } from "../../post/data-access-post/constant";

export const getRecipients = axios.create({
  baseURL: API_ADDRESS,
  header: {
    "Content-Type": "application/json",
  },
});
