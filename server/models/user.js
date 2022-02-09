const mongoose = require('mongoose');

let User = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true },
  avatar: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', User);
