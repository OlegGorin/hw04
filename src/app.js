const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// const cors = require("cors");
const cors = require("./middlewares/cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");
const loggerTwo = require("./middlewares/loggerTwo");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

try {
  mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("[MONGO_CONNECTION]", error);
}

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!");
};

// app.use(loggerTwo);
app.use(cors);
app.use(loggerOne);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
// app.use(bodyParser.json());

app.get("/", helloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

// app.get("/users/34", (request, response) => {
//   response.status(200);
//   response.send("User with id: 34");
// });

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
