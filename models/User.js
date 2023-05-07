import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String},
    status: { type: String, default: 'active' },
    apiKey: { type: String},
    address: { type: String},
    city: { type: String},
    state: { type: String},
    zipCode: { type: String},
    phoneNumber: { type: String},
    dateOfBirth: { type: String},
    createdAt: { type: Date, default: Date.now },
    guarantor: { type: String},
    guarantorAddress: { type: String},
    guarantorsNumber: { type: String},
    branch: { type: String},


    
   

})


// Create Model
const User = mongoose.model('User', UserSchema);
export default User;