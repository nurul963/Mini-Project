import api from '../api/axios.js';
export const register=(form)=>api.post("/auth/register",form);
export const login=(form)=>api.post("/auth/login",form);
