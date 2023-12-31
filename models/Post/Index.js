import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const PostSchema = new Schema({
   user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User", },
   firstName: {type: String, required: true, ref: "User", },
   lastName: {type: String, required: true, ref: "User", },
   email:{type: String, required: true, ref: "User", },
   salaryRange: { type: String},
   imageUrl: {type: String,  ref: "User", },
    title: { type: String},
    salary: { type: String},
    jobType: { type: String},
    numberOfApplicants: { type: Array},
    skills: { type: Array},
    description: { type: String},
    requiredExperence: { type: Array},
    status: { type: String, default: 'active' },
    salaryType:{type: String},
    estTime: {type: String},
    contractState: {type: String, default:'default'},
    stage: { type: String, default: 'created' },
    contractid:{ type: String },
    freelancerId: {type: String},
    phoneNumber: {type: String},
   // paymentStatus:{type: String, required: true, ref: "User", },
    location:{type: String},
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