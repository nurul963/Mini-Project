import dotenv from 'dotenv'
dotenv.config({});
export const PORT=process.env.PORT;
export const JSON_SERVER_URL=process.env.JSON_SERVER_URL;
export const JWT_SECRET=process.env.JWT_SECRET;
export const CLOUDINARY_NAME=process.env.CLOUDINARY_NAME;
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET