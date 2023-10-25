import  express from "express";
const router = express.Router();
import { ValidateToken } from "../middleware/ValidateToken.js";
import { createPost, getPost, updatePost, getPostById, updateJobpost } from "../controllers/Post/Index.js";


//create user
router.post("/api/v1/create-post", ValidateToken, createPost);
router.get("/api/v1/get-all-post", ValidateToken, getPost)
router.post("/api/v1/update-post", ValidateToken, updatePost);
router.post("/api/v1/update-Job-post", ValidateToken, updateJobpost);
router.get("/api/v1/get-post-by-id", ValidateToken, getPostById);



export { router as postRoute };