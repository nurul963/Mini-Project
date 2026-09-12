import axios from "axios";
const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        "Content-Type":"application/json"
    }
});
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