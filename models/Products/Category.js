import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const CategorySchema = new Schema({
    title: { type: String},
    createdDate: { type: Date, default: Date.now  },
})
// Create Model
const Category = mongoose.model('Category', CategorySchema);
export default Category;