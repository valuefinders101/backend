import  express from "express";

const router = express.Router();

import { postMessages } from "../controllers/User/chatMessages.js"; 



router.post("/api/v1/postnewmessages/", postMessages);








export { router as chatMessagesRoutes }; 