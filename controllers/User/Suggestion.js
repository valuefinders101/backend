import express from "express";
import User from "../../models/User.js";
import Waitlist from "../../models/Waitlist.js";


import bcrypt from "bcrypt";
//import { v4 as uuidv4 } from 'uuid';
//uuidv4();
export const Suggestion = async (req, res) => {
   
    const { firstName, lastName, email, suggestion } = req.body;
    //math.random

    const user = new Waitlist({ firstName, lastName, email, suggestion});
    try {
        //check if user with email already exists
        const userExists = await Waitlist.findOne({ email });
        if (userExists) {
            console.log(userExists)
            return res.status(201).send({ msg: "User already exist in our waitlist" });
        }
        //save user to database
        await user.save();
        console.log("this is user", user);
        //send welcome email
       // welcomeEmail(user.email, user.firstName);
        const data = user
        res.status(201).send({ 
            data,
            msg: "Suggestion sent"

        });
    } catch (error) {
        console.log("there was an  error", error);
        res.status(400).send(error);
    }
}