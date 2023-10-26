import  express from "express";
const router = express.Router();

//import { 
    // createContract,
    //  getMycontracts,
    //   updateContract,
    //    waitingApproval,
    //     completed,
    //      Banklist
        
       // } from "../controllers/Contract/Index.js";
// import { ValidateToken } from "../middleware/ValidateToken.js";

// router.post("/api/v1/sendContractRequest", ValidateToken, createContract);
// router.get("/api/v1/allcontracts", ValidateToken, getMycontracts)
// router.post("/api/v1/updateContract", ValidateToken, updateContract);
// router.post("/api/v1/approvalRequest", ValidateToken, waitingApproval);
// router.post("/api/v1/completed", ValidateToken, completed);
// router.get("/api/v1/banklist", ValidateToken, Banklist)

export { router as contractRoute };

