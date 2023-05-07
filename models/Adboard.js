import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const AdboardSchema = new Schema({
    title: { type: String},
    imageUrl: { type: String },
    expiryDate: { type: String },
    createdDate: { type: Date, default: Date.now  },
    status: { type: String},
    category: { type: String},
    subCategory: { type: String},
    amount: { type: String},
    duration: { type: String},
})


// Create Model
const Adboard = mongoose.model('Adboard', AdboardSchema);
export default Adboard;