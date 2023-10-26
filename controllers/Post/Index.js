import express from 'express'
import Post from '../../models/Post/Index.js'

export const createPost = async (req, res, next)=>{
    console.log("all", req.body)
    const user_id = req.user._id
    const Jobs = new Post({
        title: req.body.title,
        user_id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        phoneNumber:req.user.phoneNumber,
        // address: req.user.address,
        salary: req.body.salary,
        jobType: req.body.jobType,
        numberOfApplicants: req.body.numberOfApplicants,
        skillLevel: req.body.skillLevel,
        description: req.body.description,
        requiredExperence: req.body.requirements,
        salaryType:req.body.salaryType,
        estTime:req.body.estTime,
        salaryRange:req.body.salaryRange,
        location:req.body.location
    })

    console.log("here", Jobs)
    try {
        const postCreated = await Jobs.save()
        res.status(201).send({msg:"Job post was ceated successfully  ",postCreated})
        } catch (error) {
            res.status(400).send(error)
        }
    }

export const getPost = async (req, res, next)=>{
    const allPost = await Post.find();
    return res.status(200).json({msg: "All Post", data: allPost}) 
}

export const updatePost = async(req, res) => {

    console.log("came thro", req.body)
    const id = req.body.data
    const user_id = req.user._id; 
    const findPost = await Post.findOne({ _id: id }); 
    const newContact = {
        user_id: req.user._id,  
        firstName: req.user.firstName, 
        lastName: req.user.lastName,
        email: req.user.email,
        phoneNumber:req.user.phoneNumber
       }
    if(findPost){
       const newme = findPost.numberOfApplicants
       let check = newme.find(user => user.user_id == user_id)
       if(check === undefined){
        newme.push(newContact)
        findPost.save()
        res.status(201).send({ msg: "Application Submitted"})
       }else{
        res.status(201).send({msg : "You have applied for this Job already"})
       }
 
    }else{
       res.status(403).json('post not found')
    }

    }


    // get posst by id 

export const getPostById = async(req, res) =>{
const user_id = req.user._id; 
    console.log
    try {
        const post = await Post.find({user_id});
        if (!post) {
          return res.status(404).send({msg:'Post not found'});
        }
        res.send({msg:'all post by user', data:post});
      } catch (err) {
        console.error(err);
        res.status(500).send({msg:'Internal server error'});
      }
}

// update post here

export const updateJobpost = async(req, res) =>{
    try {
    const id = req.body.id
    const findPost = await Post.findOne({ _id: id }); 
    if(!findPost ){
        res.status(409).send("job doesnot exist")
    }else{
        //update Post with req.body
        let updatedData= {...req.body};
        //update Post 
       const updatepost =  await  Post.findByIdAndUpdate(id,{...updatedData},{new:true})
       if(updatepost){
        res.status(201).send( {msg:"Job post has been Updated"} )
       }else{
        res.status(406).send({msg:"something went wrong"})
       }

    }

        
    }catch(error){
        console.log("Error", error)
    }
}



