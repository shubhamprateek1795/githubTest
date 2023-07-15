const express = require('express')
const port = 5000
const bcrypt = require('bcrypt')
const jwt=require("jsonwebtoken")
var cors = require('cors')
const jwtKey="batch565665"
const app = express()
/// to receive body data /////
app.use(express.json())
/// to use cors ///
app.use(cors())

/// database connection///
require('./db/conn')
///model connection////
const Register = require('./model/register')

///register api////
app.post('/register', async (req, res) => {
  const { name, email, mobile, address, password, conpassword } = req.body
  if (name && email && mobile && address && password && conpassword) {
    const user = await Register.findOne({ email })
    if (user) {
      res.send({ "message": "Email already exists" })
    }
    else {

      if (password === conpassword) {
        let saltRounds=10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        const hashconPassword = bcrypt.hashSync(conpassword, salt);
        let register = new Register({ name, email, mobile, address, password:hashPassword, conpassword:hashconPassword });
        let data = await register.save();
        res.send(data);
      }
      else {
        res.send({ "message": "Password and Confirm Password doesn't match" })
      }
    }
  }
  else {
    res.send({ "message": "All fields are required" })
  }
});

///// fetch /////
app.get("/fetch", async (req, res) => {
  const usersList = await Register.find()
  res.send(usersList)
})

////delete ///////

app.delete("/delete/:id", async(req, res) => {
  const usersList = await Register.deleteOne({_id:req.params.id})
  res.send(usersList)
}) 

//// get user data particularly /////
app.get("/update/:id", async(req, res) => {
  const usersList = await Register.findOne({_id:req.params.id})
  res.send(usersList)
}) 

/// for update /////
app.put("/update/:id", async(req, res) => {
  const { name, email, mobile, address, password, conpassword }= req.body
  let saltRounds=10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);
  const hashconPassword = bcrypt.hashSync(conpassword, salt);
  const usersList = await Register.updateOne({_id:req.params.id},{$set:{ name, email, mobile, address, password:hashPassword, conpassword:hashconPassword }})
  res.send(usersList)
}) 

////// login ////
app.post("/login", async (req, res) => {
  try{
  const { email, password } = req.body
  if (email && password) {
    const userEmail =  await Register.findOne({ email: email })
    console.log(userEmail)
    if (userEmail !== null) {
     
      const isMatch = await bcrypt.compare(password, userEmail.password);
   
      if ((userEmail.email === email) && isMatch ) {
        var token = jwt.sign({userEmail}, jwtKey);
        res.send({ message: "login success" ,userEmail,token})
      }
      else {
        res.send({ message: "email and password is not valid" })
      }

    }
    else {
      res.send({ message: "not registered with this email id" })
    }

  }
  else {
    res.send({ message: "all field is required" })
  }
}
catch(error){
  console.log(error)
  res.send({"message":"unable to login"})
}
  
})



app.listen(port, () => {
  console.log(`app running on port ${port}`)
  console.log(`http://localhost:${port}`)
})