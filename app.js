"use strict";
require("./database/mongoConnection"); //Mongoose connection
const express = require("express");
const { routes } = require("./routes/index.routes");
const bodyParser = require("body-parser");
const cors = require("cors");

// Variables
const PORT = process.env.PORT || 8000;

//Configuring Express
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//------------Mounting Routes------------

// Only Controller
app.use("/api/user", routes);

//@route : /
//@desc : Testing Route
//@access : Public
app.use("/", (request, response) => {
  response.status(200).send("Hey Backend :D, I am alive!");
});

//LISTENING ON PORT
app.listen(PORT, () => {
  console.log("Server Running on PORT ", PORT);
});
