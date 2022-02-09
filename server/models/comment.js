const mongoose = require('mongoose');

let Comment = new mongoose.Schema(
  {
    message: { type: String, required: true },
    email: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', Comment);
