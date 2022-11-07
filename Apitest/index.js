
const express = require('express')
const Mongodb= require("mongodb")
const app = express()
const port=5000;
const dbConnect= require('./db/connection')
// // to receive body data------------------->
 app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send("hello world")
// })


// // insert api

app.post('/insert',async function (req, res) {
  let data= await  dbConnect()
  let result= await data.insertOne(req.body)
  res.send(result)
})

///////// fetch Api///////////

app.get('/fetch',async function (req, res) {
  let data= await  dbConnect()
  let result= await data.find().toArray()
  res.send(result)
})

/////// delete Api

// app.delete('/delete/:name',async function (req, res) {
//   let data= await  dbConnect()
//   let result= await data.deleteOne({name:req.params.name})
//   res.send(result)
// })

/////// delete api unique id-------------->

app.delete('/delete/:id',async function (req, res) {
  let data= await  dbConnect()
  let result= await data.deleteOne({_id:new Mongodb.ObjectId(req.params.id)})
  res.send(result)
})

// /// upadte api---------------->


app.put('/update/:_id',async function (req, res) {
  let data= await  dbConnect()
  let result= await data.updateOne(
    {_id:new Mongodb.ObjectId(req.params._id)}
    ,
    {
      $set: req.body
  })
  res.send(result)
})




app.listen (port,()=>{
 console.log("app running on port"+ port)
 console.log(`http://localhost:${port}`)
})