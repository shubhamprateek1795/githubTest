var express=require('express')
const app=express()
var localStorage = require('localStorage')
const multer  = require('multer')
/// connect database//////
require("./db/conn")
const path=require('path')
//// connect model //////
const Register=require("./model/register")




 
var folderPath=path.join(__dirname)
   
app.use(express.static(folderPath)) // express static middleware///
  
app.set("view engine", "ejs")// ejs file engine//
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//// multer file upload///////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload/')
  },
  filename: function (req, file, cb) {
  
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ 
  storage: storage,
  limits:{
    fileSize:1024*1024*3,
  },
 })



   app.get("/",(req,res)=>{
     res.render("index")
   })

   app.get("/about",(req,res)=>{
     res.render("about")
   })
   app.get("/contact",(req,res)=>{
      res.render("contact")
   })
   app.get("/dashboard",(req,res)=>{
    res.render("dashboard")

  })

  ///register api ////
   app.get("/register",(req,res)=>{
      res.render("register",{msg:""})
   })
   app.post("/register",upload.single("img"),async(req,res)=>{
    
    const userEmail= await Register.findOne({email:req.body.email})
    if(userEmail){
      res.render("register",{msg:"already registered with this email id"})
    }
    else{
           
    let register=new Register({
      name:req.body.name,
      email:req.body.email,
      mobile:req.body.mobile,
      password:req.body.password,
      img:req.file.filename
      
    })
    let data=await register.save()
    console.log(data)
    res.render("register",{msg:"registered successfully"})
    }

})


//// fetch api ///////
app.get("/fetch",async(req,res)=>{
   let users= await Register.find({})
   res.render("fetch",{usersList:users})
})

/////delete api /////

app.get("/deleteUser/:id",async(req,res)=>{
  const id=req.params.id
    await Register.findOne({_id:id})
    await Register.findOneAndRemove(id)
  res.redirect("/fetch")
})

/// update api for single user////

app.get("/updateUser/:id",async(req,res)=>{
 const id=req.params.id
 let oneUser=await Register.findByIdAndUpdate({_id:id})
  res.render("updateUser",{user:oneUser})
})

/// update post api/////

app.post("/updateUser/:id",async(req,res)=>{
  const id=req.params.id
  await Register.findOneAndUpdate({_id:id},{

  $set:{
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    password:req.body.password
  }
  })
  res.redirect("/fetch")
 })


app.get("/login",(req,res)=>{
    res.render("login",{msg:""})
 })

 //// login post api //////

   app.post("/login",async(req,res)=>{
    let userEmail=await Register.findOne({
      email:req.body.email,
      password:req.body.password
    
    })
    if(!userEmail){

      res.render("login",{msg:"you are not registered with this email id"})
    }
    else{
      localStorage.setItem("email",userEmail.email)
      emailLc=localStorage.getItem("email")
      console.log(emailLc)
      res.render("dashboard",{emailId:emailLc})
    }
   
 })

   app.get("/logout",(req,res)=>{
    localStorage.clear()
    res.redirect("/login")
  })



   app.get("*",(req,res)=>{
     res.render("404")
   })
    app.listen(5000,()=>{
        console.log("app running on port 5000")
        console.log(`http://localhost:5000`)
    })