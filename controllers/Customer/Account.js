import Account from "../../models/Customer/Account.js";


export const createAccount = async (req, res) =>{
    console.log(req.body)
    try{
        const account = new Account(req.body)
        const accountCreated = await account.save()
        res.status(201).json({data:accountCreated, msg: "Accoount Created"})
    } catch (err){
        res.status(400).json({msg:err.message})
       
    }
}


export const getAllAccount =  async (req, res) =>{
    // get all customers
    try{
        const account = await Account.find();
        res.status(201).json({data:account, msg:"List of Accounts"});
    } catch (error){
        res.status(500).json({error:error.message});
    }
}

// get account by id 

export const  getAllAccountById = async (req, res) =>{
    const {customerId} = req.body
   try{
    const account = await Account.find({customerId : customerId})
    res.status(200).json({data: account, msg: "List of Accounts by ID"})
   }catch(error){
    res.status(500).json({error:error.message});
   }
}