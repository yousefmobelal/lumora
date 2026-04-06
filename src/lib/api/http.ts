import axios from "axios";
import { handleError, logError, logResponse } from "./interceptors";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error("VITE_API_URL is not defined");
}

export const http = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

if (import.meta.env.DEV) {
  http.interceptors.response.use(logResponse, logError);
}

// use it to unwrap data as you know response when we use axios
// is avialable at response.data but whay if you have a common response structure
// like { data: T, message: string, statusCode: number } then when you have the response you are
// intersted in this data so we unwrap it by returning response.data.data
//! be careful with it, as it will be specific for your API response structure
http.interceptors.response.use(null, handleError);
