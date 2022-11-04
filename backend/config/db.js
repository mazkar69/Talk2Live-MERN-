const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config()

const connectDB = async () => {
  try {
    // console.log(process.env.URL)
    const conn = await mongoose.connect("mongodb+srv://dazz:dazzazkar@cluster0.upe0ddb.mongodb.net/?retryWrites=true&w=majority");

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
