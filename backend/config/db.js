const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config()
// console.log(process.env.URL)
const URL = "mongodb+srv://dazz:dazzazkar@cluster0.upe0ddb.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
 
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
