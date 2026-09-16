import express from 'express';
import userRoute from '../modules/user/user.route.js'
import companyRoute from '../modules/company/company.route.js';
const router=express.Router();
router.use("/auth",userRoute);
router.use("/company",companyRoute);
export default router;