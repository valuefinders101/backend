import Branch from "../../models/Settings/Branch.js";





export const createBranch = async (req, res) =>{
    console.log(req.body)
    try{
        const branch = new Branch(req.body)
        const branchCreated = await branch.save()
        res.status(201).json({data:branchCreated, msg: "Branch Created"})
    } catch (err){
        res.status(400).json({msg:err.message})
       
    }
}


export const getAllBranches =  async (req, res) =>{
    try{
        const branch = await Branch.find();
        res.status(201).json({data:branch, msg:"List of all Branches"});
    } catch (error){
        res.status(500).json({error:error.message});
    }
}

