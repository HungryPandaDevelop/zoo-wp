import express from "express";

import { sendMessage, getMessages, getUnreadMessages } from '../controllers/message.controller.js'
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

// router.get('/:id', protectRoute, getMessages);
// router.post('/send/:id', protectRoute, sendMessage);
router.post('/', getMessages);
router.post('/unread/', getUnreadMessages);
router.post('/send/', sendMessage);

export default router;