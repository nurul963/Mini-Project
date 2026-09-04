import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, login, updateUser } from '../controllers/user.controller.js';
import {isAuthenticated} from '../middleware/isAuthenticated.js';
import {roleMiddleware} from '../middleware/roleMiddleware.js';
const router=express.Router();
router.route("/")
      .get(isAuthenticated,roleMiddleware('ADMIN'),getAllUsers)
router.route("/:id")
      .get(isAuthenticated,getUserById)
      .patch(isAuthenticated,updateUser)
      .delete(isAuthenticated,roleMiddleware('ADMIN'),deleteUser)
router.post("/register",createUser);
router.post("/login",login);
export default router;