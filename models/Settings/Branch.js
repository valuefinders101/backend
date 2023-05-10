import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const BranchSchema = new Schema({
    title: { type: String},
    state: {type: String},
    location : {type: String},
    region: {type : String},
    country: {type: String},
    createdDate: { type: Date, default: Date.now  },
})
// Create Model
const Branch = mongoose.model('Branch', BranchSchema);
export default Branch;