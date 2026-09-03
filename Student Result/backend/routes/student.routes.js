import express from 'express';
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from '../controllers/student.controller.js';
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
      .get(getAllStudents)
      .post(createStudent);
router.route("/:id")
      .get(getStudentById)
      .patch(updateStudent)
      .delete(deleteStudent);
export default router