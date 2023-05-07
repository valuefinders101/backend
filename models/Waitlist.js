import mongoose, { Schema, Document, Model } from 'mongoose';

// Create Schema
const WaitlistSchema = new Schema({
  email: { type: String },
  firstName: { type: String },
    lastName: { type: String },
    suggestion: { type: String },
})

// Create Model
const Waitlist = mongoose.model('Waitlist', WaitlistSchema);
export default Waitlist;