import express from 'express';
import { createExame, deleteExame, getAllExames, getExameById, updateExame } from '../controllers/exam.controller.js';
const router=express.Router();
router.route("/")
      .get(getAllExames)
      .post(createExame)
router.route("/:id")
      .get(getExameById)
      .patch(updateExame)
      .delete(deleteExame)
export default router;