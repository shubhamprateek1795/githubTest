var express=require('express')
const app=express()
var path=require('path')
const folderPath=path.join(__dirname)
app.set("view engine", "ejs")
app.get("/",(req,res)=>{
    // res.sendFile(folderPath + "/index")
    res.render("index")
})
app.get("/about",(req,res)=>{
    // res.sendFile(folderPath + "/about")
    res.render("about")
})
app.get("*",(req,res)=>{
    // res.sendFile(folderPath + "/404")
    res.render("404")
})
app.listen(5000,()=>{
    console.log("app running on port 5000")
    console.log(`http://localhost:5000`)
})