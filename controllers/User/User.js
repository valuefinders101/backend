import User from "../../models/User/User.js";
import Flutterwave from 'flutterwave-node-v3'
import https  from 'https'
import request from 'request';

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



export const transferFunds = async (req, res)=>{


   console.log("this is transfer",req.body)

   try{

      fetch('https://api.paystack.co/transfer', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer sk_live_9f7c2489c52cc8a9a2432ec8496953667fd7f8a2'
         },
         body: JSON.stringify({
           "source": "balance", 
           "reason": `${req.body.reason}`, 
           "amount":req.body.amount, 
           "recipient": `${req.body.recipient}`
         })
     })
     .then(response => response.json())
     .then(async (data) =>{
       res.send(data)
     })
        
     .catch(error => console.log('Error:', error));
     



   }catch(error){
      res.send(error)
   }


   // fetch('https://api.paystack.co/transfer', {
   //     method: 'POST',
   //     headers: {
   //         'Content-Type': 'application/json',
   //         'Authorization': 'Bearer sk_live_9f7c2489c52cc8a9a2432ec8496953667fd7f8a2'
   //     },
   //     body: JSON.stringify({
   //       "source": "balance", 
   //       "reason": `${req.body.reason}`, 
   //       "amount":req.body.amount, 
   //       "recipient": `${req.body.recipient}`
   //     })
   // })
   // .then(response => response.json())
   // .then(async (data) =>{
   //   res.send(data)
   // })
      
   // .catch(error => console.log('Error:', error));
   
   
   
   }


export const addAcount = async (req, res)=>{
   const payload = req.body?.accountDetails[0]
const params = JSON.stringify({
  "type": "nuban",
  "name": `${payload?.accountName}`,
  "account_number": `${payload?.accountNumber}`,
  "bank_code": `${payload?.bankCode}`,
  "currency": "NGN"
})

console.log("this is paramss",params)

fetch('https://api.paystack.co/transferrecipient', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk_live_9f7c2489c52cc8a9a2432ec8496953667fd7f8a2'
    },
    body: JSON.stringify({
      "type": "nuban",
      "name": `${payload?.accountName}`,
      "account_number": `${payload?.accountNumber}`,
      "bank_code": `${payload?.bankCode}`,
      "currency": "NGN"
    })
})
.then(response => response.json())
.then(async (data) =>{
 console.log("the data from paystack server",data?.status);
 if(data.status == true){
  console.log("do logic here",data?.data.recipient_code)
 const recipient_code = data?.data.recipient_code
  const id = req.user._id 
  const here = req.body.accountDetails
  here[0].recipient_code=recipient_code;
  const me = {
   ...req.body,
  }

  console.log("this is me here ",me)
 


  
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
})
   
   
   
   
.catch(error => console.log('Error:', error));



}





export const verifyBankAccount =  async( req, res)=>{
   console.log("res",req.body)
  
 const options = {
      hostname: 'api.paystack.co',
      port: 443,
      uri: `https://api.paystack.co/bank/resolve?account_number=${req.body.account_number}&bank_code=${req.body.account_bank}`,
      method: 'GET',
      headers: {
        Authorization: 'Bearer sk_live_9f7c2489c52cc8a9a2432ec8496953667fd7f8a2'
      },
      
    }
    request(options, function (error, response) {
          if (error) throw new Error(error);
         res.send(response.body);
         
        });

}



