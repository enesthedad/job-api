import express from "express";
import mongoose from "mongoose";
// SETTING UP VARIABLES FROM CONFIG.ENV
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
// END OF SETTING UP CONFIG.ENV

// IMPORT ROUTERS
import jobsRouter from "./routes/jobs.mjs";
//
import userModel from "./models/UserModel.mjs";
import jobModel from "./models/jobModel.js";

mongoose.connect(process.env.DB_LOCAL_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// async function insert() {
//   await userModel.create({
//     name: "ENES",
//     email: "enes@gmail.com",
//   });
// }
// async function insert() {
//   await jobModel.create(

// }

// insert();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/v1", jobsRouter);
app.listen(PORT, () => {
  console.log(`app is on ${PORT}`);
});
