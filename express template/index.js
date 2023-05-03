var express=require('express')
const app=express()
 var path=require('path')
 const folderPath= path.join(__dirname+"/public")
  app.use(express.static(folderPath))

  app.get("/",function(req,res){
       res.sendFile(folderPath+"index.html")
  })
  app.get("/contact",function(req,res){
       res.sendFile(folderPath+"contact.html")
  })
  app.get("/listing",function(req,res){
       res.sendFile(folderPath+"listing.html")
  })
  app.get("/category",function(req,res){
       res.sendFile(folderPath+"category.html")
  })
  app.get("*",function(req,res){
       res.end("<h1>404 page not found</h1>")
  })
  app.listen(5000,()=>{
    console.log("app running on port 5000")
    console.log(`http://localhost:5000`)
  })