import api from '../config/db.js'
export const categoryRepository={
    async getAll(){
        const response=await api.get("/categories");
        return response.data;
    },
    async getById(id){
        const response=await api.get(`/categories/${id}`);
        return response.data;
    },
    async create(category){
        const response=await api.post(`/categories`,category);
        return response.data;
    },
    async update(id,data){
        const response=await api.patch(`/categories/${id}`,data);
        return response.data;
    },
    async delete(id){
        const response=await api.delete(`/categories/${id}`);
        return response.data;
    }
}