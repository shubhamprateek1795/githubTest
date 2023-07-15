var express=require('express')
const app=express()
var path=require('path')
const fs=require('fs')
const port=5000
var users=require("./data.json")
var session = require('express-session')


const folderPath=path.join(__dirname)
app.set("view engine","ejs")
app.use(express.static(folderPath))
// to receive the body data///
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))


///// defining express session
app.use(session({
      secret: 'express app',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 }
    }))


app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
      res.render("about")
})
app.get('/contact',(req,res)=>{
      res.render("contact")
})
app.get('/register',(req,res)=>{
      res.render("register",{msg:""})
})
app.post('/register',(req,res)=>{
let validUsers=users.findIndex((u)=>{
    return u.email===req.body.email
})
if(validUsers===-1){
      let fileName=JSON.parse(fs.readFileSync("data.json"))
      fileName.push(req.body)
      fs.writeFileSync("data.json",JSON.stringify(fileName,null,4))
      res.render("register",{msg:"registered successfully"})
}
else{
      res.render("register",{msg:"already registered with this email id"})
}
   
})
app.get("/login",(req,res)=>{
    res.render("login",{msg:""})
})
app.get("/logout",(req,res)=>{
      req.session.destroy(function(err) {
            res.redirect("login")
          })
})

app.get("/dashboard",(req,res)=>{
   res.render("dashboard",{u:req.session.userData})
})

app.post('/login',(req,res)=>{
      let fileName=users.findIndex((u)=>{
         return u.email===req.body.email && u.password===req.body.password
      })
      if(fileName===-1){
         res.render("login",{msg:"login failed"})
      }
      else{
            req.session.userData=users[fileName]
            req.session.save()
            res.redirect("/dashboard")
      }
     })
app.get('*',(req,res)=>{
      res.render("404")
})

app.listen(port,()=>{
   console.log(`app running on port:${port}`)
   console.log(`http://localhost:${port}`)
})