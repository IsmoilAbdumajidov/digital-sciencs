import axios from "axios";
import { clearLS, getFromLS } from "../utils/localStorage";

export const url = "http://192.168.10.100:8000/storage/"

export const instance = axios.create({
    // baseURL: "https://digitalscience.nammqi.uz/api/",
    baseURL: "http://192.168.10.100:8000/api/",
    // headers: {
    //     "Content-Type": "application/json",
    // },
})


// instance.interceptors.request.use(
//     (config) => {
//         const token = getFromLS("token");
//         // console.log(config);
//         if (token) {
//             config.headers.authorization = `Bearer ${token}`;
//             // console.log(token);
//         }
//         return config;
//     },
//     (error) => {
//         console.log("error");
//         return Promise.reject(error);
//     }
// );