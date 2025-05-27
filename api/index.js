require("dotenv").config(); 
const express = require("express"); 
const cors = require("cors");
const { connectDb } = require("./database/index.js");
const router = require("./router/router.js");

const app = express(); 
const port = process.env.PORT
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL
}))
app.use("/api", router);


connectDb().then(() => {
  console.log("db connected")
  app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
  })
}).catch((e)=>{
    console.log(`error db connection ${e}`)
  })
  
  module.exports = app;

