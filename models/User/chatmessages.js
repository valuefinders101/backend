
import mongoose from "mongoose";

const chatMessagesSchema = mongoose.Schema({
    
    id:{
        type: String,
        required: false, 
    }, 
    username: {
        type:String, 
        require: true, 
    }, 
    message: {
        type: String, 
    }



},      

    {
        timestamps: true 
    }

)

const ChatMessages = mongoose.model('ChatMessages', chatMessagesSchema); 

export { ChatMessages }; 