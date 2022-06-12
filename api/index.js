import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import filmsRouter from "./routes/films.js";
import concertsRouter from "./routes/concerts.js";
import clubsRouter from "./routes/clubs.js";
import contactRouter from "./routes/contactUs.js";




dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected mongoDB");
  } catch (error) {
    throw error;
  }
};

//midlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/films", filmsRouter);
app.use("/api/concerts", concertsRouter);
app.use("/api/clubs", clubsRouter);
app.use("/api/contact", contactRouter);




app.use((err, req, res, next) => {
  const errorStatus = err.satatus || 500;
  const messageStatus = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    succes: false,
    status: errorStatus,
    message: messageStatus,
    stack: err.stack,
  });
});

app.listen(5500, () => {
  connect();
  console.log("conected backEnd!");
});
