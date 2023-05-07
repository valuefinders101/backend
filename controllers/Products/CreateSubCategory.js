import SubCategory from "../../models/Products/SubCategory.js";

// create Category 

export const createSubCategory = async (req, res) => {
    const createSubCategory = new SubCategory(req.body);
    try {
        await createSubCategory.save();
        const data = createSubCategory
        res.status(201).send({ msg: "Sub Category created successfully", data: data });
}
catch (error) {
    console.log("there was an  error", error);
    res.status
}
}