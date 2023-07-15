var mongoose=require('mongoose')
const { Schema } = mongoose;

const registerSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  name: String,
   email:String,
   mobile:Number,
   address:String,
   password:String,
  conpassword:String,

  date: { type: Date, default: Date.now },
});
/// creating model////
const register= mongoose.model("Register",registerSchema)
module.exports=register