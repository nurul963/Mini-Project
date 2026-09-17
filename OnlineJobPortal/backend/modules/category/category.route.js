import express from 'express';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { addCategoryController, getAllCategoryController } from './category.controller.js';
const router=express.Router();
router.post('/',isAuthenticated,addCategoryController);
router.get('/',isAuthenticated,getAllCategoryController);
export default router;