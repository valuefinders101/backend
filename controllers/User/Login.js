import express from "express";
import User from "../../models/User/User.js";
import bcrypt from "bcrypt";
import { PasswordCorrect } from "../../utils/Index.js";
import pkg from 'jsonwebtoken';





export const Login = async (req, res) => {

    const jwt  = pkg;
    const { email, password} = req.body;
    try {
        //check if user with email already exists
        const userExists = await User.findOne({email});
        if (!userExists) {
            return res.status(404).send({ msg: "User does not exist" });
        }
        //check if password is correct
        const passwordCorrect = await PasswordCorrect(password, userExists);
        if (passwordCorrect) {
            const user = {
               data: userExists
            }
            const accessToken = jwt.sign({ user: user }, 'mayorgnn@088',
            {
                expiresIn: '1h'
            });
            return res.status(200).send({
                msg: "Login Successful",
                accessToken
            })
        }
        if (!passwordCorrect) {
            return res.status(404).send({ msg: "Password is incorrect" });
        }
    } catch (error) {
        res.status(400).send(error);
    }
}