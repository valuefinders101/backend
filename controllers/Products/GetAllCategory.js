import Category from "../../models/Products/Category.js";


export const getAllCategory = async (req, res) => {
  
    try {
        const data = await Category.find();
        res.status(200).send({msg:"success", data: data});
    }
    catch (error) {
        res.status(404).send
}
}