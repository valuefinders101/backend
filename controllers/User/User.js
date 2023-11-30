import User from "../../models/User/User.js";
import Flutterwave from 'flutterwave-node-v3'

// Get current user
export const CurrentUser = async (req, res)=>{
   console.log("all good", req.user)
   const user_id = req.user._id; 

   const user = await User.find({_id :user_id});
   console.log("this iss user", ...user)
   return res.status(200).send(...user);

}

// update user 

export const UpdateCurrentUser = async (req, res)=>{
   // find the user 
   console.log(req.body)
   const id = req.user._id 
   try{
      const  update = await User.findByIdAndUpdate({_id: id}, {...req.body},{new : true});
      if(update){
         console.log(update)
         return res.status(200).send({msg:"profile updated", data:update})
      }
   
      if(!update){
         return res.status(200).send(({msg: "could not update your user"}))
      }
   }catch(error){
   return res.status(200).send({msg: error})
   }

}


export const addAcount = async (req, res)=>{
   // find the user 
   console.log(req.body)
   const id = req.user._id 
   try{
      const  update = await User.findByIdAndUpdate({_id: id}, {...req.body},{new : true});
      if(update){
         console.log(update)
         return res.status(200).send({msg:"profile updated", data:update})
      }
   
      if(!update){
         return res.status(200).send(({msg: "could not update your user"}))
      }
   }catch(error){
   return res.status(200).send({msg: error})
   }

}


export const verifyBankAccount =  async( req, res)=>{
   console.log("res",req.body)
 const flw = new Flutterwave("FLWPUBK-aedca6af8fdc813c43262b085a9bbb76-X", "FLWSECK-e7018031b91bae1df8fee95c635ad0da-18b65e92704vt-X");
const payload = {account_number: req.body.account_number, account_bank: req.body.account_bank};
const response = await flw.Misc.verify_Account(payload);
console.log("res here",response)
res.send(response)

}



