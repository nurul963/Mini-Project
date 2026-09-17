import express from 'express';
import { addCompnayController, createBulkCompany, getAllCompanyController, getCompanyByRecruiterIdController } from './company.controller.js';
import { upload } from '../../utils/common.js';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
const router=express.Router();
router.post('/',isAuthenticated,upload.single('logo'),addCompnayController);
router.post('/bulk',isAuthenticated,createBulkCompany)
router.get('/',isAuthenticated,getAllCompanyController);
router.get('/recruiter',isAuthenticated,getCompanyByRecruiterIdController);
export default router;