import SubCategory from "../../models/Products/SubCategory.js";


export const getAllSubCategory = async (req, res) => {
  
    try {
        const data = await SubCategory.find();
        res.status(200).send({msg:"success", data: data});
    }
    catch (error) {
        res.status(404).send
}
}