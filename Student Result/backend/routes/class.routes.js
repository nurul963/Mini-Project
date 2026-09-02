import express from 'express';
import { createClass } from '../controllers/class.controller.js';
const router=express.Router();
router.route("/")
      .post(createClass)
export default router;