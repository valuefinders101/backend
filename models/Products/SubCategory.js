import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const SubCategorySchema = new Schema({
    title: { type: String},
    category: { type: String},
    createdDate: { type: Date, default: Date.now  },
})
// Create Model
const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
export default SubCategory;