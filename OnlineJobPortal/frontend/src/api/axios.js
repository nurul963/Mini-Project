import axios from "axios";
import {publicRoute} from '../routes/publicRoute.js'
const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        "Content-Type":"application/json"
    }
});
api.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("token");
        const isPublicRoute=publicRoute.includes(config.url);
        if(token && !isPublicRoute){
            config.headers.authorization=`Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)
//Globel response handler
// api.interceptors.response.use(
//     (response)=>{
//         const statusCode=response.data.statusCode;
//         const message=response.data.message;
//         if(statusCode===200 || statusCode===201){
            
//             return response;
//         }
//     },
//     (error)=>{
//         console.error(error);
//     }
// )
export default api;