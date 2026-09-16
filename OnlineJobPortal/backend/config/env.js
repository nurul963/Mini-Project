import dotenv from 'dotenv';
dotenv.config()
export const PORT=process.env.PORT;
export const DB_NAME=process.env.DB_NAME;
export const DB_USER=process.env.DB_USER;
export const DB_PASSWORD=process.env.DB_PASSWORD;
export const DB_HOST=process.env.DB_HOST;
export const SECRET_KEY=process.env.SECRET_KEY;
export const CLOUDINARY_NAME=process.env.CLOUDINARY_NAME;
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET;