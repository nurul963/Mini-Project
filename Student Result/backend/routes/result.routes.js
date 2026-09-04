import express from 'express';
import { createResult, deleteResult, getAllResults, getResultById, getStudentResult } from '../controllers/result.controller.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';
import {roleMiddleware} from '../middleware/roleMiddleware.js';
const router=express.Router();
router.route("/")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getAllResults)
      .post(isAuthenticated,roleMiddleware('ADMIN','TEACHER','STUDENT'),createResult)
router.route("/:id")
        .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getResultById)
        .delete(isAuthenticated,roleMiddleware('ADMIN'),deleteResult);
router.get("/student/:studentId",isAuthenticated,roleMiddleware('ADMIN','TEACHER','STUDENT'),getStudentResult);
export default router;