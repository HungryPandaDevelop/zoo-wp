import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from '../controllers/user.controller.js'
// import { signup, login, logout } from '../controllers/auth.controller.js'

const router = express.Router();

// router.get('/', getUsersForSidebar);
router.get('/', protectRoute, getUsersForSidebar);
// router.post('/login', login);
// router.post('/logout', logout);

export default router; 