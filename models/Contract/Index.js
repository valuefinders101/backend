import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const ContractSchema = new Schema({
   user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User", },
   firstName: {type: String, required: true, ref: "User", },
   lastName: {type: String, required: true, ref: "User", },
   freelancerId:{type: String},
   postid:{type: String},
   freelancerName: {type: String},
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
    contractState: {type: String, default: 'created' },
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
const Contract = mongoose.model('Contract', ContractSchema);
export default Contract;