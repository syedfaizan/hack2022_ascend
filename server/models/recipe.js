const mongoose = require('mongoose');

let Recipe = new mongoose.Schema({
  headline: { type: String, required: true },
  dek: { type: String, required: true },
  siteImage: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  note: { type: String },
  nutritionalInfo: { type: String },
  likes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Recipe', Recipe);
