import express from "express";

import { getConversation, addConversation, deleteConversation } from '../controllers/conversation.controller.js'


const router = express.Router();

// router.get('/', getUsersForSidebar);
router.post('/', getConversation);
router.post('/add', addConversation);
router.post('/delete/', deleteConversation);

export default router; 