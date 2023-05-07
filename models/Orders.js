import mongoose, { Schema, Document, Model } from 'mongoose';


// Create Schema
const OrdersSchema = new Schema({
    apiKey: { type: String},
    reference: { type: String },
    token: { type: String },
    productDetails: { type: Array},
    shippingDetails: { type: Object },
    date: { type: String},
})

// Create Model
const Orders = mongoose.model('Orders', OrdersSchema);
export default Orders;

