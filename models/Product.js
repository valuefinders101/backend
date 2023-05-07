import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const ProductSchema = new Schema({
   title: { type: String},
   price: { type: String },
   subCategory: { type: String },
   category: { type: String },
   productUrl: { type: String },
   productDescription: { type: String },
   productThumbnailUrl: { type: String},
   discount: { type: String},
   createdAt: { type: String},
   updatedAt: { type: String},
   quantity: { type: String},





})

// Create Model
const Product = mongoose.model('Product', ProductSchema);
export default Product;

