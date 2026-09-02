import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';
import {upload} from '../middleware/uploadMiddleware.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleMiddleware.js';
const router=express.Router();
router.get("/",getPosts);
router.get("/:id",getPost);
router.post("/",authenticate,authorize('ADMIN'),upload.single('image'),createPost)
router.patch("/:id",authenticate,authorize('ADMIN'),updatePost);
router.delete("/:id",authenticate,authorize('ADMIN'),deletePost)
export default router;