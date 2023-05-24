import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const PostSchema = new Schema({
   user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User", },
   firstName: {type: String, required: true, ref: "User", },
   lastName: {type: String, required: true, ref: "User", },
   address: {type: String, required: true, ref: "User", },
   imageUrl: {type: String,  ref: "User", },
    title: { type: String},
    salary: { type: String},
    jobType: { type: String},
    numberOfApplicants: { type: Array},
    skillLevel: { type: String},
    jobDescription: { type: String},
    requirements: { type: Array},
    status: { type: String, default: 'active' },
    timestamps: { 
        createdAt: {
            type: Date,
            default: Date.now
        
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }

})


// Create Model
const Post = mongoose.model('Post', PostSchema);
export default Post;