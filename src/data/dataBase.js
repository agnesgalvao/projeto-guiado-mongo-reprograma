
require("dotenv").config()
const mongoose = require("mongoose");


const connect = async ()=>{
    mongoose.connect(process.env.DATABASE_URL,
        { useNewUrlParser: true,
        
        useUnifiedTopology: true} ).then(console.log("conectado ao mongoDb")).catch( err =>console.error)

}


module.exports = {connect}