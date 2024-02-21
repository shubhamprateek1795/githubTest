var mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mern_app')
.then(()=>{
  console.log("successfully connected to mongodb server")
})
.catch(()=>{
    console.log("connection error in mongodb server")
})