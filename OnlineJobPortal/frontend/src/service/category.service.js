import api from '../api/axios.js';
export const getAllCategory=()=>api.get("/category");