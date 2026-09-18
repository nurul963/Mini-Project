import api from '../api/axios.js';
export const getAllJobs=(limit=10,offset=0)=>api.get("/job",{
    params:{
        limit:limit,
        offset:offset
    }
})
export const getJobDetails=(id)=>api.get(`/job/${id}`);
export const createJobs=(formData)=>api.post("/job",formData);
