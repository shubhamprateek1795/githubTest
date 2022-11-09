var express=require("express");
const app=express();
var path=require("path");
const folderpath =path.join(__dirname+"/public");
//console.log(folderpath)
app.use(express.static(folderpath));

app.get("/",function(req,res){
    res.sendFile(folderpath+"index.html")
});
app.get("/about",function(req,res){
    res.sendFile(folderpath+"/about.html")
});
app.get("/contact",function(req,res){
    res.sendFile(folderpath+"/contact.html")
});
app.get("/work",function(req,res){
    res.sendFile(folderpath+"/work-single.html")
});
app.get("/pricing",function(req,res){
    res.sendFile(folderpath+"/pricing.html")
});
app.get("*",function(req,res){
    res.sendFile(folderpath+"/404.html")
});
app.listen(5000,()=>{
    console.log("App running on port 5000")
    console.log("http://localhost:5000")
})