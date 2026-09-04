import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from '../controllers/student.controller.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';
import {roleMiddleware} from '../middleware/roleMiddleware.js';
const router=express.Router();
/*
/api/student
GET getAllStudent
POST createStudent

/api/student/:id
GET     getStudentById
PATCH   updateStudent
DELETE  deleteStudent
*/
router.route("/")
      .get(isAuthenticated,roleMiddleware('ADMIN'),getAllStudents)
      .post(isAuthenticated,roleMiddleware('ADMIN'),createStudent);
router.route("/:id")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getStudentById)
      .patch(isAuthenticated,roleMiddleware('ADMIN'),updateStudent)
      .delete(isAuthenticated,roleMiddleware('ADMIN'),deleteStudent);
export default router