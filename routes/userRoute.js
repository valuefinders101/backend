import  express from "express";
const router = express.Router();
import { Signup } from "../controllers/User/Signup.js";
import { Login } from "../controllers/User/Login.js";

//create user
router.post("/api/v1/register", Signup);
//login user
router.post("/api/v1/login", Login);


export { router as userRoute };