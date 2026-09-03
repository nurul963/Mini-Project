import express from 'express';
import { createResult, getAllResults, getResultById } from '../controllers/result.controller.js';
const router=express.Router();
router.route("/")
      .get(getAllResults)
      .post(createResult)
router.route("/:id")
        .get(getResultById)
export default router;