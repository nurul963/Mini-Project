import api from '../api/axios.js';
export const applyJob=(data)=>api.post("/application/apply",data);
export const getAppliedJob=()=>api.get("/application");