var mongoose=require("mongoose");
const { Schema } = mongoose;

/// creating schema/////

const registerSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  mobile:Number,
  img:String,
  date: { type: Date, default: Date.now },

});
/// creating model /////
const regsiter = mongoose.model('Register',registerSchema);
module.exports=regsiter