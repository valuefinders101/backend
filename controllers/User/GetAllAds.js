import express from "express";
import Product from "../../models/Product.js";
import Adboard from "../../models/Adboard.js";

//get all products

export const getAllAds = async (req, res) => {
  
    try {
        const adds = await Adboard.find();
        res.status(200).send({msg:"success", data: adds});
    }
    catch (error) {
        res.status(404).send
}
}


