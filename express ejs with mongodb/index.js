var express=require('express')
const multer  = require('multer')
var port=5000
const app=express()
const path=require('path')
var localStorage=require("localStorage")
const folderPath=path.join(__dirname)
/// mongodb connection file--->
require('./db/connection');
/// connect model---->
const Register=require('./model/register')



app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

///// multer disk storage----->
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {

      cb(null, Date.now() + file.originalname)
    }
  })
  
  //// upload parameters for multer----->

  const upload = multer({
     storage: storage ,
     limits: {
        fieldSize: 1024 * 1024 * 3
     },
    })


app.use(express.static(folderPath))
// app.use(express.json())
app.set('view engine','ejs')

app.get("/",(req,res)=>{
      res.render("index")
}) 

app.get("/about",(req,res)=>{
    res.render("about")
}) 
app.get("/contact",(req,res)=>{
    res.render("contact")
}) 
app.get("/register",(req,res)=>{
     res.render("register",{msg:""})
}) 

//// fetch api------>

app.get("/fetch", async (req,res)=>{
    let users= await Register.find({})
    res.render("fetch",{usersList:users})
    
})

///// delete api------>
app.get("/deleteUser/:id", async (req,res)=>{
    const id=req.params.id
  await Register.findByIdAndDelete(id)
    res.redirect("/fetch")
})

/// update api for single user----->

app.get("/updateUser/:id", async (req,res)=>{
     const id=req.params.id
  const oneUser=  await Register.findById(id)
     res.render("updateUser",{user:oneUser})
})

////// update post api------>

app.post("/updateUser/:id",async(req,res)=>{
     const id=req.params.id
     const oneUser=await Register.findOneAndUpdate({_id:id},{
       $set:{
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        address:req.body.address,
        password:req.body.password
    }
      
     }) 
     res.redirect("/fetch")
    })

///// register ----->

app.post("/register",upload.single("img"),async (req,res)=>{
    const userEmail= await Register.findOne({email:req.body.email})
    if(userEmail){
        res.render("register",{msg:"already registered with this email id "}) 
    }
    else{
        console.log(req.file)
        let register=new  Register({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            address:req.body.address,
            password:req.body.password,
            img:req.file.filename
        })
          let data=  await  register.save()
        //   console.log(data)
          res.render("register",{msg:"registration successfully"})
    }
})
    
//// login post api------>

app.post("/login",async(req,res)=>{
    const userEmail= await Register.findOne({
        email:req.body.email,
        password:req.body.password
    })
    if(!userEmail){
        res.render("login",{msg:"you are not registered user"})
    }
    else{
        localStorage.setItem("email",JSON.stringify(userEmail.email))
        emailLc=localStorage.getItem("email")
        res.render("dashboard",{emailId:emailLc})
    }
}) 
     


app.get("/dashboard",(req,res)=>{
    res.render("dashboard")
}) 

app.get("/login",(req,res)=>{
    res.render("login",{msg:""})
}) 



app.get("/logout",(req,res)=>{
 localStorage.clear()
 res.redirect("login")
  
}) 

app.get("*",(req,res)=>{
    res.render("404")
}) 
app.listen(port,()=>{
    console.log(`app running on ${port}`)
    console.log(`http://localhost:${port}`)
})