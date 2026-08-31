import api from '../config/db.js'
export const userRepository={
    //get all user
    async getAll(){
        const response=await api.get("/users");
        return response.data;
    },
    async getById(id){
        const response=await api.get(`/users/${id}`);
        return response.data;
    },
    async getByEmail(email){
        const response=await api.get(`/users?email=${email}`);
        return response.data[0];
    },
    async create(user){
        const response=await api.post(`/users`,user);
        return response.data;
    },
    async update(id,data){
        const response=await api.patch(`/users/${id}`,data);
        return response.data;
    },
    async delete(id){
        const response=await api.delete(`/users/${id}`);
        return response.data;
    }
}