
import axios from "axios";

export const API_BASE_URL = "https://headnest-api-0yjf.onrender.com/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
