const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected Sucessfully. Host ${conn.connection.host} running on PORT:${conn.connection.port}...`
        .bgCyan.bold
    );
  } catch (error) {
    console.log(`MongoDB connection failed with err ${error}`.bgRed.bold);
    //keep repeating connect until its sucessful
    // setTimeout(connectDB, 5000)
    process.exit(1);
  }
};

module.exports = connectDB;
