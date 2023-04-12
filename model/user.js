const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  userID: ObjectId,
  userName: {
    type: String,
    required: true,
  },
  userPassWord: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('user', userSchema);
