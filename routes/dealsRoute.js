import  express from "express";
const router = express.Router();


import { 
    createContract,
     getMycontracts,
      updateContract,
       waitingApproval,
        completed,
         Banklist
        
       } from "../controllers/Contract/Index.js";
import { ValidateToken } from "../middleware/ValidateToken.js";


//create user
router.post("/api/v1/register", Signup);
//login user
router.post("/api/v1/login", Login);
// get current user info
router.get("/api/v1/current-user", ValidateToken, CurrentUser)
router.post("/api/v1/update-current-user", ValidateToken, UpdateCurrentUser)
router.post("/api/v1/add-account", ValidateToken, addAcount)
router.post("/api/v1/sendsms", ValidateToken, sendSms)
router.post("/api/v1/verify-account", ValidateToken, verifyBankAccount)

//get Username and roomname from formm and pass it to room 
//router.get("api/v1/room", Room); 




export { router as dealsRoute };