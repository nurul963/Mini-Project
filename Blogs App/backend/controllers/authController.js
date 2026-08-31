import { userRepository } from "../repositories/userRepository.js";
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
export const register = async (req, resp, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await userRepository.getByEmail(email);
        if (existingUser) {
            return resp.status(409).json({
                success: false,
                message: "Email already registered"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashPassword
        });
        const createUser = await userRepository.create(user);
        return resp.status(201).json({
            success: true,
            message: "Registration successful",
            data: {
                id: createUser.id,
                name: createUser.name,
                email: createUser.email,
                role: createUser.role
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}