import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const UserRoleSchema = new Schema({
    title: { type: String},
    createdDate: { type: Date, default: Date.now  },
})
// Create Model
const UserRole = mongoose.model('UserRole', UserRoleSchema);
export default UserRole;