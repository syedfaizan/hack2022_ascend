const mongoose = require('mongoose');

let Comment = new mongoose.Schema({
  message: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }
});

module.exports = mongoose.model('Comment', Comment);
