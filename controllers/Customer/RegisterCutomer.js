import Customer from "../../models/Customer/Customer.js"


export const registerCustomer = async (req, res) =>{
    console.log(req.body)
    try{
        const customer = new Customer(req.body)
        const customerCreated = await customer.save()
        res.status(201).json({data:customerCreated, msg: "Customer Created"})
    } catch (err){
        res.status(400).json({msg:err.message})
       
    }
}