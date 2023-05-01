import express from "express";
import mongoose from "mongoose"; 
import cors from "cors"; 
import cookieParser from "cookie-parser";
import morgan from "morgan";
import csrf from "csurf";
import dotenv from "dotenv";
dotenv.config();
import allRoutes from "./routes/allRoutes.js";

// app.
const app = express();
const port = process.env.PORT || 8000; // port.

// const csrfProtection = csrf({ cookie: true }); // csrf protection.

// middlewares.
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));

// routing.
app.use("/api", allRoutes);

// mongodb connection.
const connect = async () => {
    try {
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("DB CONNECTED.");
  
      app.listen(port, () =>
        console.log("Server running on PORT: " + port)
      );
    } catch (error) {
      console.error("DB CONNECTION ERROR:", error);
      process.exit(1);
    }
  };
  
connect();