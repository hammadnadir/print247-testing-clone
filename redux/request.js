import axios from "axios";
import { errorInterceptor, requestInterceptor } from "./interceptors";

export const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`
export const baseURL2 = `${process.env.NEXT_PUBLIC_API_URL2}`

const request = axios.create({ withCredentials: true, baseURL: baseURL });

// request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(null, errorInterceptor);

export default request;
