import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dbConnect from "./db/db.js";
import { Register } from "./controllers/UserController.js";
import { Flights } from "./controllers/Flights.js";
//---------------------------------------

const app = express();
//---------------------------------------

dotenv.config();
const PORT = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
//---------------------------------------

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    defer: true,
  })
);
app.use(cookieParser());
//---------------------------------------

app.get("/", (req, res) => {
  res.send("Flight Booking App");
});

//---------------------------------------

app.post("/signup", Register);
app.post("/flights", Flights);


//---------------------------------------
dbConnect(username, password);

app.listen(PORT, () => {
  console.log(`Server is running at Port:${PORT} successfully`);
});
