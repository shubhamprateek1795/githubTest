var mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/guardians_of_the_galaxy')
.then(()=>{
    console.log("successfully connected to mongoDB Server")
})
.catch(()=>{
    console.log("connection error in mongoDB")
})