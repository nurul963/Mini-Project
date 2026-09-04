import express from 'express';
import { createSubject, deleteSubject, getAllSubjects, getSubjectById, updateSubject } from '../controllers/subject.controller.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';
import {roleMiddleware} from '../middleware/roleMiddleware.js';
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
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getAllSubjects)
      .post(isAuthenticated,roleMiddleware('ADMIN'),createSubject);
router.route("/:id")
      .get(isAuthenticated,roleMiddleware('ADMIN','TEACHER'),getSubjectById)
      .patch(isAuthenticated,roleMiddleware('ADMIN'),updateSubject)
      .delete(isAuthenticated,roleMiddleware('ADMIN'),deleteSubject);
export default router