var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/mern_project')
.then(()=>{
    console.log("connected to Mongodb server")
})
.catch(()=>{
    console.log("connection error in Mongodb server")
})