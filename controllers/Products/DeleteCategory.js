import Category from "../../models/Products/Category.js";
import mongoose from "mongoose";

export const deleteCategory = async (req, res) =>{
    try{
 
 await Category.deleteOne({_id: new mongoose.Types.ObjectId(req.body._id)
 }).then((data, error) => {
     if(data.deletedCount === 0){
         res.status(400).send({
             msg: "Category not found"
         })
     }else{
         res.status(200).send({
             msg: "Category deleted"
         })
     }
     })
     }catch(err){
         res.status(500).send(err);
     }
 
 }