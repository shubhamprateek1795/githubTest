var mongoose = require('mongoose')
const { Schema } = mongoose;

// defining schema for collection----->
const registerSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  mobile: String,
  address: String,
  password: String,
  conpassword: String,
  date: { type: Date, default: Date.now },

});
const register = mongoose.model("Register", registerSchema)
module.exports = register