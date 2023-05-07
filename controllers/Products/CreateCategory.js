import Category from "../../models/Products/Category.js";

// create Category 

export const createCategory = async (req, res) => {
    const createCategory = new Category(req.body);
    try {
        await createCategory.save();
        const data = createCategory
        res.status(201).send({ msg: "Category created successfully", data: data });
}
catch (error) {
    console.log("there was an  error", error);
    res.status
}
}