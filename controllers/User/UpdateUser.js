// update user 
import express from "express";
import User from "../../models/User.js";


export const updateUser = async (req, res) => {
    const { apiKey } = req.body;
    try {
        const Key = await User.findOne({ apiKey });
    if (!Key || Key.apiKey !== apiKey || Key.apiKey === undefined) {
        const result = await res.status(200).send({ error: "Invalid API Key, Access Denied" });
        return result
    }
     if (Key) {
         await User.updateOne({ apiKey }, req.body);
        res.status(200).send({ msg: "user updated successfully"});
        }

        
    } catch (error) {
        console.log("there was an  error", error);
        res.status(400).send(error);
    }
}