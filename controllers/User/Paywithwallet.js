


// const paywithwallet = ()=>{
//     console.log("working here")
// }

// export default paywithwallet

import express from "express";
import User from "../../models/User.js";

//  update user balance with new amount
export const paywithwallet = async (req, res) => {
    console.log("this is req.body", req.body);
    const { apiKey, amount, description } = req.body;
    try {
        const Key = await User.findOne({ apiKey });
    if (!Key || Key.apiKey !== apiKey || Key.apiKey === undefined) {
        const result = await res.status(200).send({ error: "Invalid API Key, Access Denied" });
        return result
    }
     if (Key) {
        const newBalance =  parseInt(Key.balance) - parseInt(amount);
        await User.updateOne({ apiKey }, { balance: newBalance });
        res.status(200).send({ msg: "Balance updated successfully" , data:{balance: newBalance, description: description, amount: amount}});
        }

        
    } catch (error) {
        console.log("there was an  error", error);
        res.status(400).send(error);
    }
}