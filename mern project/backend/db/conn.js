var mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mern_application')
.then(()=>{
    console.log("succesfully connected to mongoDb")
})
.catch(()=>{
    console.log("connection error")
})