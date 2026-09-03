import express from 'express';
import { createSubject, deleteSubject, getAllSubjects, getSubjectById, updateSubject } from '../controllers/subject.controller.js';
const router=express.Router();
/*
/api/subject
GET getAllSubject
POST createSubject

/api/subject/:id
GET     getSubjectById
PATCH   updateSubject
DELETE  deleteSubject
*/
router.route("/")
      .get(getAllSubjects)
      .post(createSubject);
router.route("/:id")
      .get(getSubjectById)
      .patch(updateSubject)
      .delete(deleteSubject);
export default router