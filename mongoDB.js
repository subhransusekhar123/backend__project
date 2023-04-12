const mongoose = require('mongoose');

const connectDB = (con__string) => {
  return mongoose.connect(con__string);
};

module.exports = connectDB;
