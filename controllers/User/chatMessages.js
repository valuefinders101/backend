

import { ChatMessages } from "../../models/User/chatmessages.js";

export const postMessages = async (req, res) => { 
   const {  username, message } = req.body 
   if ( !username || !message){
    res.status(404).json({message: 'enter id, username and message'})
   }

   const newMessage = await ChatMessages.create({ username, message }) 
      //io.emit(newMessage); 
      res.json({newMessage}).status(200); 
   };
