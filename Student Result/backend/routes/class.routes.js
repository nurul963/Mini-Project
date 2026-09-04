import express from 'express';
import { createClass, deleteClass, getAllClasses, getClassById, updateClass } from '../controllers/class.controller.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';
import {roleMiddleware} from '../middleware/roleMiddleware.js';
const router=express.Router();
router.route("/")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'), getAllClasses)
      .post(isAuthenticated,roleMiddleware('ADMIN'),createClass)
router.route("/:id")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getClassById)
      .patch(isAuthenticated,roleMiddleware('ADMIN'),updateClass)
      .delete(isAuthenticated,roleMiddleware('ADMIN'),deleteClass)
export default router;