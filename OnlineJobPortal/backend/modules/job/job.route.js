import express from 'express';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
import { createJobController, getAllJobController, getAllJobRecruiterController, getJobByIdController } from './job.controller.js';
const router=express.Router();
router.post('/',isAuthenticated,createJobController);
router.get("/recruiter",isAuthenticated,getAllJobRecruiterController);
router.get('/',isAuthenticated,getAllJobController);
router.get('/:job_id',isAuthenticated,getJobByIdController)
export default router;