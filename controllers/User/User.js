


// Get current user
export const CurrentUser = (req, res)=>{
   return res.status(200).send(req.user);

}

