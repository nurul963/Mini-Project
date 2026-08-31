import axios from "axios";
import { JSON_SERVER_URL } from "../utils/env.js";
const api=axios.create({
    baseURL:JSON_SERVER_URL
});
export default api;