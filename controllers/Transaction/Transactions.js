import Transaction from "../../models/Transaction/Transaction.js";
import Account from "../../models/Customer/Account.js";
import mongoose from "mongoose";







export const createTransaction = async (req, res) =>{
   // console.log(req.body)
   // const {amount, accountId} = req.body
    const data = req.body
    try{
        const customer = await Account.find({_id:new mongoose.Types.ObjectId(data.accountId)});
        console.log("herre", customer[0].ApprovedSum)
        if(data.transactionType === "update"){
            const updateApprovedSum  = parseInt(customer[0].balance)  - parseInt(data.amount) ;
            console.log("data", updateApprovedSum)
            // update customer.balance
            const updateCustomer = await Account.updateOne({_id:new mongoose.Types.ObjectId(data.accountId)},{
                $set:{
                    balance:updateApprovedSum
                }
            })

            if(updateCustomer.acknowledged === true){
                  const transaction = new Transaction(req.body)
                const transactionCreated = await transaction.save()
                 return  res.status(201).json({data:transactionCreated, msg: "Transaction Created"})
            }else{
                console.log("not good")
            }
        }else{
            const transaction = new Transaction(req.body)
            const transactionCreated = await transaction.save()
             return  res.status(201).json({data:transactionCreated, msg: "Transaction Created"})
        }
        

       

       
    } catch (err){
        res.status(400).json({msg:err.message})
       
    }
}





export const getAllTransactions =  async (req, res) =>{
    // get all customers
    try{
        const transaction = await Transaction.find();
        res.status(201).json({data:transaction, msg:"List of Transactions"});
    } catch (error){
        res.status(500).json({error:error.message});
    }
}

// get account by id 

export const  getAllTransactionsById = async (req, res) =>{
    const {accountId} = req.body
   try{
    const transaction = await Transaction.find({accountId : accountId})
    res.status(200).json({data: transaction, msg: "List of Transactions by ID"})
   }catch(error){
    res.status(500).json({error:error.message});
   }
}




