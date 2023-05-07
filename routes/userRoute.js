import  express from "express";
const router = express.Router();
import { Signup } from "../controllers/User/Signup.js";
import { Login } from "../controllers/User/Login.js";

//create user
router.post("/register", Signup);
//login user
router.post("/login", Login);









export { router as userRoute };