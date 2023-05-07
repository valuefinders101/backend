import express from "express";
import Transaction from "../../models/Transaction.js";
import User from "../../models/User.js";
import { sendBorrowToken, sendToUserEmail } from "../../utils/Index.js";

//save transaction details
export const saveTransaction = async (req, res) => {
    console.log(req.body)
    const saveTransaction = new Transaction(req.body);
    
    try {
        const apiKey = req.body.apiKey;
        const Key = await User.findOne({ apiKey });
        if (!Key || Key.apiKey !== apiKey || Key.apiKey === undefined) {
            const result = await res.status(200).send({ error: "Invalid API Key, Access Denied" });
            return result
        }

        await saveTransaction.save();
        const data = saveTransaction
        console.log("all good",data)
        res.status(201).send({ msg: "Transaction saved successfully", data });
    }
    catch (error) {
        console.log("there was an  error", error);
        res.status(200).send(error);
    }
}