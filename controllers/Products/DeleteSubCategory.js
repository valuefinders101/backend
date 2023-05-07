import SubCategory from "../../models/Products/SubCategory.js";
import mongoose from "mongoose";

export const deleteSubCategory = async (req, res) =>{
    try{
 
 await SubCategory.deleteOne({_id: new mongoose.Types.ObjectId(req.body._id)
 }).then((data, error) => {
     if(data.deletedCount === 0){
         res.status(400).send({
             msg: "Sub Category not found"
         })
     }else{
         res.status(200).send({
             msg: "Sub Category deleted"
         })
     }
     })
     }catch(err){
         res.status(500).send(err);
     }
 
 }