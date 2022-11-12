const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
var cors = require("cors");
const jwt=require('jsonwebtoken')
const jwtKey="mern project5454545"
app.use(cors());
const port = 5000;
///////db connect///////
require("./db/connection");
/////model import//
var Register = require("./Model/register");
//////////to receive body data
app.use(express.json());
/////////register api////////////
app.post('/register', async (req, res) => {
  const { name, email, mobile, address, password, conpassword } = req.body
  if (name && email && mobile && address && password && conpassword) {
    const user = await Register.findOne({ email })
    if (user) {
      res.send({ "message": "Email already exists" })
    }
    else {

      if (password === conpassword) {
        /////Store hash in your password DB///////
        let saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        const hashConPassword = bcrypt.hashSync(conpassword, salt);

        let register = new Register({ name, email, mobile, address, password: hashPassword, conpassword: hashPassword, conpassword: hashConPassword });
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
////////////fetch/////////////////////

app.get('/fetch', async (req, res) => {
  const userList = await Register.find()
  res.send(userList)
});

////// delete api //////////

app.delete('/delete/:id', async (req, res) => {
  const userList = await Register.deleteOne({
    _id: req.params.id
  })
  res.send(userList)
});

////// get particular user data in update form/////////


app.get('/update/:id', async (req, res) => {
  const userList = await Register.findOne({
    _id: req.params.id
  })
  res.send(userList)
});
/////// for update///////

app.put('/update/:id', async (req, res) => {


  const { name, email, mobile, address, password, conpassword } = req.body
  let saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);
  const hashConPassword = bcrypt.hashSync(conpassword, salt);
  const userList = await Register.updateOne({ _id: req.params.id }, { $set: { name, email, mobile, address, password: hashPassword, conpassword: hashPassword, conpassword: hashConPassword } })
  res.send(userList)
});

///// login api///////
app.post("/login", async (req, res) => {
  try{
  const { email, password } = req.body
  if (email && password) {
    const user =  await Register.findOne({ email: email })
    console.log(user)
    if (user !== null) {
     
      const isMatch = await bcrypt.compare(password, user.password);
   
      if ((user.email === email) && isMatch ) {
        var token = jwt.sign({user}, jwtKey);
        res.send({ message: "login success" ,user,token})
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
  console.log("App running on port " + port);
  console.log(`http://localhost:${port}`)
});