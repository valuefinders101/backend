import  express from "express";
const router = express.Router();
import { Signup } from "../controllers/User/Signup.js";
import { Login } from "../controllers/User/Login.js";
import { CurrentUser } from "../controllers/User/User.js"
import { ValidateToken } from "../middleware/ValidateToken.js";

//create user
router.post("/api/v1/register", Signup);
//login user
router.post("/api/v1/login", Login);
// get current user info
router.get("/api/v1/current-user", ValidateToken, CurrentUser)

export { router as userRoute };