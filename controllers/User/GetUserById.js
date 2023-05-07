
import express from "express";
import User from "../../models/User.js";


//get transaction by user api key
export const getUserById = async (req, res) => {
    const { apiKey } = req.body;
    try {
        const Key = await User.findOne({ apiKey });
        if (!Key || Key.apiKey !== apiKey || Key.apiKey === undefined) {
            const result = await res.status(200).send({ error: "Invalid API Key, Access Denied" });
            return result
        }
        console.log("all good", Key)
        res.status(200).send(Key);
    } catch (error) {
        console.log("there was an  error", error);
        res.status(200).send(error);
    }
}