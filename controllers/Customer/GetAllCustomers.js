import Customer from "../../models/Customer/Customer.js";


export const getAllCustomers =  async (req, res) =>{
    // get all customers
    try{
        const customers = await Customer.find();
        res.status(201).json({data:customers, msg:"List of custoomer"});
    } catch (error){
        res.status(500).json({error:error.message});
    }
}