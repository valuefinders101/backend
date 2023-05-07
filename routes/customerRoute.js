import  express from "express";
const router = express.Router();

import { registerCustomer } from "../controllers/Customer/RegisterCutomer.js";
import { getAllCustomers } from "../controllers/Customer/GetAllCustomers.js";
import { createAccount, getAllAccount, getAllAccountById  } from "../controllers/Customer/Account.js";


router.post("/create-customer", registerCustomer)
router.get("/customer", getAllCustomers)
router.post("/create-account", createAccount)
router.get("/get-all-accounts", getAllAccount)
router.post("/get-all-accounts-by-id", getAllAccountById)



export { router as customerRoute };