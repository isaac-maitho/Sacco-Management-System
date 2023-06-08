require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')

const app = express()


app.use(bodyParser.json());

//console.log(`---->`, userRoutes)
//routes
app.use('/api',userRoutes)

//connect to db
mongoose.connect("mongodb+srv://isaacmaitho:isaacmaitho14@job-search-app.97utfrh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
 //listening to requests

 app.listen(process.env.PORT, () =>{
  console.log('connected to the db and listening to port', process.env.PORT)
})



