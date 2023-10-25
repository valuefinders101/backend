// import express from 'express';  
// import { ChatMessages } from '../models/User/chatmessages.js';




// function SocketRouter(io){
//     const router = express.Router(); 


//     router.get("/forecast", (req, res) => {
//         res.json(ChatMessages).status(200)
         
        
//         //emit the message passed to the route 
//         io.emit('mod_forecast', ChatMessages); 
//         res.json({
//             message: "message sent!"
//         }).status(200); 
//     }) 
//         return router; 
// }


// export { SocketRouter };