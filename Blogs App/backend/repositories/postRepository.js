import api from '../config/db.js'
export const postRepository={
    async getAll(){
        const response=await api.get("/posts");
        return response.data;
    },
    async getById(id){
        const response=await api.get(`/posts/${id}`);
        return response.data;
    },
    async getByAuthor(authorId){
        const response=await api.get(`/posts?autherId=${authorId}`);
        return response.data;
    },
    async getByCategory(categoryId){
        const response=await api.get(`/posts?categoryId=${categoryId}`);
        return response.data;
    },
    async create(post){
        const response=await api.post(`/posts`,post);
        return response.data;
    },
    async update(id,data){
        const response=await api.patch(`/posts/${id}`,data);
        return response.data;
    },
    async delete(id){
        const response=await api.delete(`/posts/${id}`);
        return response.data;
    }
}