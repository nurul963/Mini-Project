import express from 'express';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { applyJobController, getApplicationController } from './application.controller.js';
const router=express.Router();
router.post("/apply",isAuthenticated,applyJobController);
router.get("/",isAuthenticated,getApplicationController)
export default router;