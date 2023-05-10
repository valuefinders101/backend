import  express from "express";
const router = express.Router();

import { registerCustomer } from "../controllers/Customer/RegisterCutomer.js";
import { getAllCustomers } from "../controllers/Customer/GetAllCustomers.js";
import { createAccount, getAllAccount, getAllAccountById  } from "../controllers/Customer/Account.js";
import { createTransaction, getAllTransactions, getAllTransactionsById } from "../controllers/Transaction/Transactions.js";


router.post("/create-customer", registerCustomer)
router.get("/customer", getAllCustomers)
router.post("/create-account", createAccount)
router.get("/get-all-accounts", getAllAccount)
router.post("/get-all-accounts-by-id", getAllAccountById)
router.post("/create-transaction", createTransaction)
router.get("/account/transactions", getAllTransactions)
router.post("/account/get-all-transactions-by-id", getAllTransactionsById)

export { router as customerRoute };