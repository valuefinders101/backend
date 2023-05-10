import UserRole from "../../models/Settings/UserRole.js";


export const createUserRole = async (req, res) =>{
    console.log(req.body)
    try{
        const userRole = new UserRole(req.body)
        const userRoleCreated = await userRole.save()
        res.status(201).json({data:userRoleCreated, msg: "User Role Created"})
    } catch (err){
        res.status(400).json({msg:err.message})
       
    }
}


export const getAllUserRoles =  async (req, res) =>{
    try{
        const userRole = await UserRole.find();
        res.status(201).json({data:userRole, msg:"List of User Roles"});
    } catch (error){
        res.status(500).json({error:error.message});
    }
}

