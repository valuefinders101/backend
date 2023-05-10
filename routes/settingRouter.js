import  express from "express";
const router = express.Router();

import { createUserRole, getAllUserRoles } from "../controllers/Setting/User.js";
import { createBranch, getAllBranches } from "../controllers/Setting/Branch.js";




router.post("/create-user-role", createUserRole)
router.get("/get-all-user-roles", getAllUserRoles)
router.post("/create-branch", createBranch)
router.get("/get-all-branches", getAllBranches)

export { router as settingRoute };