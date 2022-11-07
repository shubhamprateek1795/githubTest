const {MongoClient} = require('mongodb')
//connection url--------->

const url="mongodb://localhost:27017"
const client= new MongoClient(url)

// database name-------->
 const dbName= "supernatural_db"

 async function dbConnect(){
    // use connect method to connect to the server
    await client.connect()
    console.log("connected succesfully to the Mongo Db server")
    const db= client.db(dbName)
    const collection=db.collection('users')

    return collection
 

 }
 module.exports=dbConnect