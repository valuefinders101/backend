import Contract from "../../models/Contract/Index.js";
import Post from "../../models/Post/Index.js";
import User from '../../models/User/User.js';
import request from 'request';
import https  from 'https'
import axios from 'axios';


import Paystack from 'paystack';

const paystack = Paystack('sk_live_9f7c2489c52cc8a9a2432ec8496953667fd7f8a2');



export const createContract = async (req, res, next)=>{
    console.log("all here", req.body)
    const user_id = req.user._id
    const NPost = new Contract({
        title: req.body.data.title,
        user_id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        freelancerId: req.body.freelancedata.user_id,
        freelancerName: req.body.freelancedata.freelancerName,
        // address: req.user.address,
        salary: req.body.data.salary,
        jobType: req.body.data.jobType,
        numberOfApplicants: req.body.data.numberOfApplicants,
        skillLevel: req.body.data.skillLevel,
        description: req.body.data.description,
        requiredExperence: req.body.data.requirements,
        salaryType:req.body.data.salaryType,
        estTime:req.body.data.estTime,
        salaryRange:req.body.data.salaryRange,
        location:req.body.data.location,
        postid:req.body.data._id
       
    })

   
    try {
        const postCreated = await NPost.save()
        const updatepost =  await  Post.updateOne({_id:req.body.data._id},{contractState: 'pending'},{new:true})
       
        console.log("con",postCreated);
        res.status(201).json({msg:`Contract request has been sent`,postCreated,  updatepost})
        } catch (error) {
            res.status(400).json(error)
        }
    }




    export const getMycontracts = async(req, res) =>{
        const user_id = req.user._id; 
            console.log
            try {
                const post = await Contract.find({freelancerId:user_id});
                if (!post) {
                  return res.status(404).send({msg:'contract not found'});
                }
                res.send({msg:'all contracts by user', data:post});
              } catch (err) {
                console.error(err);
                res.status(500).send({msg:'Internal server error'});
              }
        }



        export const updateContract = async(req, res) =>{
          try {
          const id = req.body._id
          const freelancerId = req.body.freelancerId
          const findPost = await Contract.findOne({ _id: id }); 
          if(!findPost ){
              res.status(409).send("job does not exist")
          }else{
              //update Post with req.body
              let updatedData= {...req.body};
              //update Post 
              const postid = req.body.postid
              
             const updatepost =  await  Post.updateOne({_id:postid},{contractState: req.body.contractState, contractid:id, freelancerId:freelancerId},{new:true})
             const updatecontract =  await  Contract.findByIdAndUpdate(id,{...updatedData},{new:true})
             
             if(updatecontract &&  updatepost){
              res.status(201).send( {msg:"Job post has been Updated"} )
             }else{
              res.status(406).send({msg:"something went wrong"})
             }
      
          }
      
              
          }catch(error){
              console.log("Error", error)
          }
      }

      export const waitingApproval = async(req, res) =>{
        try {
        const id = req.body._id
        const freelancerId = req.body.freelancerId
        const findPost = await Contract.findOne({ _id: id }); 
        if(!findPost ){
            res.status(409).send("job does not exist")
        }else{
            //update Post with req.body
            let updatedData= {...req.body};
            //update Post 
            const postid = req.body.postid
            
           const updatepost =  await  Post.updateOne({_id:postid},{contractState: 'approval',freelancerId:freelancerId},{new:true})
           const updatecontract =  await  Contract.findByIdAndUpdate(id,{...updatedData},{new:true})
           
           if(updatecontract &&  updatepost){
            res.status(201).send( {msg:"Job post has been Updated"} )
           }else{
            res.status(406).send({msg:"something went wrong"})
           }
    
        }
    
            
        }catch(error){
            console.log("Error", error)
        }
    }


    export const completed = async(req, res) =>{
        try {
        const id = req.body.contractid
        console.log("id", req.body)
        const findPost = await Contract.findOne({ _id: id }); 
        if(!findPost ){
            res.status(409).send("job does not exist")
        }else{
            //update Post with req.body
            let updatedData= {...req.body};
            //update Post 
            const postid = req.body._id
            console.log("postid", postid)
            const findUser = await User.findOne({_id:req.body.freelancerId})
            console.log("user", findUser)
            const percent = parseInt(req.body.salary) * 15 / 100
            const amountpaid = parseInt(req.body.salary) - parseInt(percent)
            console.log("userba",findUser.balance, amountpaid)
            findUser.balance +=amountpaid
            const userUpdateBalance =await User.findByIdAndUpdate(req.body.freelancerId ,{$set:{
                balance : findUser.balance}},{ new: true })
                userUpdateBalance
                console.log('after', userUpdateBalance.balance)
            

            
           const updatepost =  await  Post.updateOne({_id:postid},{contractState: 'completed'},{new:true})
           const updatecontract =  await  Contract.updateOne({_id:id},{contractState: 'completed'},{new:true})
           
           if(updatecontract &&  updatepost){
            res.status(201).send( {msg:"Job post has been Updated"} )
           }else{
            res.status(406).send({msg:"something went wrong"})
           }
    
        }
        }catch(error){
            console.log("Error", error)
        }
    }




export const Banklist = async(req, res) =>{
const options = {
    hostname: 'api.paystack.co',
    port: 443,
    uri: 'https://api.paystack.co/bank?country=nigeria',
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