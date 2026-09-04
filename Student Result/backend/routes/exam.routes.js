import express from 'express';
import { createExame, deleteExame, getAllExames, getExameById, updateExame } from '../controllers/exam.controller.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';
import {roleMiddleware} from '../middleware/roleMiddleware.js';
const router=express.Router();
router.route("/")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getAllExames)
      .post(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),createExame)
router.route("/:id")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER','STUDENT'),getExameById)
      .patch(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),updateExame)
      .delete(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),deleteExame)
export default router;