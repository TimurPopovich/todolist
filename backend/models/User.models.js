import mongoose from "mongoose";

mongoose.pluralize(null)

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
})

export default mongoose.model('User', userSchema)
