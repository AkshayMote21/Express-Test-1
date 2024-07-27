import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.get('/', function (req, res) {
  res.send('Home Page')
});

dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`server is running on port ${process.env.PORT_NUMBER}`);
});