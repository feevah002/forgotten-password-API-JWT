require("express-async-errors");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
// const connection = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
main().catch(err=>{
  if(err){
    console.log(err)
  }
})
async function main(){
  await mongoose.connect("mongodb://localhost:27017/forgottenpassword")
}


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
const routes = require("./forgottenPassword/routes");

app.use("/api/v1", routes);
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});






app.listen(3000, (err)=>{
  if(err){
    console.log(err)
  } else{
    console.log("server started successfully")
  }
})
module.exports = app;