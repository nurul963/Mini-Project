import api from '../api/axios.js';
export const getCompanyByRecruiter=()=>api.get("/company/recruiter");