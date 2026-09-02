import api from '../config/db.js'
export const commnetRepository={
    async getAll(){
        const response=await api.get("/comments");
        return response.data;
    },
    async getById(id){
        const response=await api.get(`/comments/${id}`);
        return response.data;
    },
    async getByPost(postId){
        const response=await api.get(`/comments?postId=${postId}`);
        return response.data;
    },
    async create(commnet){
        const response=await api.post(`/comments`,commnet);
        return response.data;
    },
    async update(id,data){
        const response=await api.patch(`/comments/${id}`,data);
        return response.data;
    },
    async delete(id){
        const response=await api.delete(`/comments/${id}`);
        return response.data;
    }
}