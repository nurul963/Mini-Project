import express from 'express';
import { addCompnayController } from './company.controller.js';
import { upload } from '../../utils/common.js';
import { isAuthenticated } from '../../auth/isAuthenticated.js';
const router=express.Router();
router.post('/',isAuthenticated,upload.single('logo'),addCompnayController);
export default router;