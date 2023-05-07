// add product to database
import express from "express";
import Orders from "../../models/Orders.js";

//save transaction details
export const  createOrder = async (req, res) => {
    const {apiKey} = req.body
    const payload = {...req.body, reference: Math.floor(100000000 + Math.random() * 900000000, apiKey) }
    const CreateOrder = new Orders(payload);
    
    try {
        await CreateOrder.save();
        const data = CreateOrder
        // generate reference number
       
        console.log(data)
        res.status(201).send({ msg: "Order created successfully", data, status: "success", reference: data.reference });
}
catch (error) {
    console.log("there was an  error", error);
    res.status
}
}
