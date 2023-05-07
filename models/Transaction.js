import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const TransactionSchema = new Schema({
    
    reference: { type: String },
    token: { type: String },
    units: { type: String },
    email: { type: String },
    apiKey: { type: String},
    firstName: { type: String},
    address: { type: String},
    phoneNumber: { type: String},
    recharge_id: { type: String},
    product_code: { type: String},
    servicecharge: { type: String},
    amount_charged: { type: String},
    amount: { type: String},
    date: { type: String},
    transactionType: { type: String},
    description: { type: String},
    
})

// Create Model
const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;