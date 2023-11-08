import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    userType: { type: String},
    phoneNumber: { type: String},
    address: { type: String},
    status: { type: String, default: 'active' },
    paymentStatus: {type: String, default: 'Verified'},
    balance:{ type: Number, default: 0},
    specialty:{type: String},
    onlinePortfolio:{type: String},
    salary:{type: String},
    state:{type: String},
    address: {type: String},
    bio:{type: String},
    accountDetails: {type: Array},
    imageUrl: {type: String},
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
const User = mongoose.model('User', UserSchema);
export default User;