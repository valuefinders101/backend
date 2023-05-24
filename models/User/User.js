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