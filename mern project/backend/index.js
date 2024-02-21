var express = require("express")
const bcrypt = require('bcrypt');
var cors = require('cors')
const jwt = require('jsonwebtoken')
const jwtKey = "Mern app2323"
const port = 5000
const app = express()
app.use(cors())

/// database connection--->

require('./db/connection')
/// model connection----->
const Register = require('./model/register')
/// to receive body data---->
app.use(express.json())




//// register api---->

app.post("/register", async (req, res) => {
    const { name, email, mobile, address, password, conpassword } = req.body
    if (name && email && mobile && address && password && conpassword) {
        const user = await Register.findOne({ email })
        if (user) {
            res.send({ "message": "email already exist" })
        }
        else {
            if (password === conpassword) {
                const saltRounds = 10;
                const salt = bcrypt.genSaltSync(saltRounds);
                const hashPassword = bcrypt.hashSync(password, salt);
                const hashconPassword = bcrypt.hashSync(conpassword, salt);
                // Store hash in your password DB.
                let register = new Register({
                    name, email, mobile, address,
                    password: hashPassword, conpassword: hashconPassword
                })
                let data = await register.save()
                res.send(data)
            }
            else {
                res.send({ "message": "password and conform password dosent match" })
            }
        }
    }
    else {
        res.send({ "message": "all fields are required" })
    }

})

////// fetch api /////

app.get("/fetch", async (req, res) => {
    const userList = await Register.find()
    res.send(userList)
})

/// delete api----->

app.delete("/delete/:id", async (req, res) => {
    const userList = await Register.deleteOne({ _id: req.params.id })
    res.send(userList)
})
// get particular update data for individual------>
app.get("/update/:id", async (req, res) => {
    const userList = await Register.findOne({ _id: req.params.id })
    res.send(userList)
})

///// update //////
app.put("/update/:id", async (req, res) => {
    const { name, email, mobile, address, password, conpassword } = req.body
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);
    const hashconPassword = bcrypt.hashSync(conpassword, salt);
    const userList = await Register.updateOne(
        { _id: req.params.id },
        { $set: { name, email, mobile, address, password: hashPassword, conpassword: hashconPassword } }
    )
    res.send(userList)
})

//// login api /////

app.post("/login", async (req, res) => {
    try{
    const { email, password } = req.body
    if (email && password) {
      const userEmail =  await Register.findOne({ email: email })
      console.log(userEmail)
      if (userEmail !== null) {
       
        const isMatch = await bcrypt.compare(password, userEmail.password);
     
        if ((userEmail.email === email) && isMatch ) {
          var token = jwt.sign({userEmail}, jwtKey,{expiresIn:"1hr"});
          res.send({ message: "login successfully" ,userEmail,token})
        }
        else {
          res.send({ message: "email and password is incorrect" })
        }
  
      }
      else {
        res.send({ message: "you are not registered user" })
      }
  
    }
    else {
      res.send({ message: "all fields are required" })
    }
  }
  catch(error){
    console.log(error)
    res.send({"message":"unable to login"})
  }
    
  })


app.listen(port, () => {
    console.log(`app running on port:${port}`)
    console.log(`http://localhost:${port}`)
})