import dotenv from 'dotenv';
dotenv.config({});
export const PORT=process.env.PORT;
export const MONGO_URI=process.env.MONGO_URI;
export const SECERATE_KEY=process.env.SECERATE_KEY;
export const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET
export const CALLBACK_URL=process.env.CALLBACK_URL;