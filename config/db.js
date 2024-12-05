require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.LOCAL_MONGO_URI;

mongoose.connect(mongoURI)
mongoose.connection
    .on("open", ()=>{
        console.log('db connected');
        
    })

    .once("error", ()=>{
        console.log("failed to connect to db" + error);
        
    })
module.exports = mongoose;