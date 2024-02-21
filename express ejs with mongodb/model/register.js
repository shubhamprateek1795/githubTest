var mongoose=require('mongoose')
const { Schema } = mongoose;
/// define schema for collection
const registerSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: {type:String},
  mobile: Number,
  address: String,
  password: String,
  img:String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },


});
const register = mongoose.model('Register', registerSchema);
module.exports=register