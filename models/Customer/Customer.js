import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const CustomerSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    phoneNumber: { type: String},
    HomeAddress: { type: String},
    ApprovedSum: { type: String},
    BankName: { type: String},
    AccountNumber: { type: String},
    AccountName: { type: String},
    profileImage: { type: String},
    natureOfJob: { type: String},
    DailyIncome: { type: String},
    MonthlyIncome: { type: String},
    HomeStatus: { type: String},
    workAddress: { type: String},
    value: { type: String},
    particulars: { type: String},
    guarantorsName: { type: String},
    guarantorsNumber: { type: String},
    guarantorsJob: { type: String},
    guarantorsaddress: { type: String},
    branch: { type: String},
    accountOfficer: { type: String},
    createdDate: { type: Date, default: Date.now },
})
// Create Model
const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;