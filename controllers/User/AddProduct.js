// add product to database
import express from "express";
import Product from '../../models/Product.js';

//save transaction details
export const addProduct = async (req, res) => {
    console.log(req.body)
    const addProduct = new Product(req.body);
    
    try {
        await addProduct.save();
        const data = addProduct
        console.log(data)
        res.status(201).send({ msg: "Product saved successfully", data });
}
catch (error) {
    console.log("there was an  error", error);
    res.status
}
}

