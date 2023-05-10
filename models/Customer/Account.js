import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const AccountSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    ApprovedSum: { type: String},
    daliyRate: { type: String},
    Accumulation: { type: String},
    customerId: { type: String},
    maturityDate: { type: String},
    status: { type: String, default: "inactive"},
    createdDate: { type: Date, default: Date.now },
    balance: {type: String}
})
// Create Model
const Account = mongoose.model('Account', AccountSchema);
export default Account;