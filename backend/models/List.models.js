import mongoose from "mongoose";

mongoose.pluralize(null)

const listSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: Boolean, default: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

export default mongoose.model('List', listSchema)
