import Product from "../../models/Product.js";
import mongoose from "mongoose";

export const deleteProduct = async (req, res) =>{
   try{

await Product.deleteOne({_id: new mongoose.Types.ObjectId(req.body._id)
}).then((data, error) => {
    if(data.deletedCount === 0){
        res.status(400).send({
            msg: "Product not found"
        })
    }else{
        res.status(200).send({
            msg: "Product deleted"
        })
    }
    })
    }catch(err){
        res.status(500).send(err);
    }

}




