const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const MONGO_URL = 'mongodb+srv://admin:testing123@cluster1.4hdg53u.mongodb.net/?retryWrites=true&w=majority' ;

// With the help of mongoose we will connect to MongoDB through Node JS.
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Final= new MongoClient(MONGO_URL);
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors = require("cors");

app.get('/api/users', async (req,res) => {
  try{
    await Final.connect();
    const database=Final.db('myApp');
    const collection=database.collection('users')
    const query = await collection.insertOne({
      name:"Anthony",
      lastname:"Azar"
    });

    res.status(200).json({awesome:'yes'});
  } catch(error){
    throw error;
  } finally {
    await Final.close();
    console.log('all is done')
  }
})
// Establish a connection to our database on MongoDB Atlas
mongoose.set('strictQuery', false);
mongoose

  .connect(MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// To detect from which source the server is receiving data:
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// To make sure our Node server has started
// Our server will run on PORT 5000
app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running!");
});

