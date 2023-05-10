import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const TransactionSchema = new Schema({
    amount: { type: String},
    accountId: { type: String},
    transactionType: { type: String},
    io: { type: String},
    description: { type: String},
    accountOfficer: { type: String},
    createdDate: { type: Date, default: Date.now },
})
// Create Model
const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;