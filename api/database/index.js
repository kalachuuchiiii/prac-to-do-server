const mongoose = require("mongoose");

exports.connectDb = async()=>{
  try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
      }catch(e){
        throw new Error(e.message);
      }
}