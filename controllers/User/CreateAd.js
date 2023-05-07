// add product to database
import express from "express";
import Adboard from '../../models/Adboard.js';

//save transaction details
export const createAd = async (req, res) => {
    console.log(req.body)
    const createAd = new Adboard(req.body);
    
    try {
        await createAd.save();
        const data = createAd
        console.log(data)
        res.status(201).send({ msg: "Add created successfully", data });
}
catch (error) {
    console.log("there was an  error", error);
    res.status
}
}

