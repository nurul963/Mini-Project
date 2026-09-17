import express from 'express';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { createJobController, getAllJobController } from './job.controller.js';
const router=express.Router();
router.post('/',isAuthenticated,createJobController);
router.get('/',getAllJobController);
export default router;