require("dotenv").config(); //creates private variables that u dont want to be shared on website like github
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./models");
const handle = require("./handlers");

const app = express();
const port = process.env.PORT;

//cors and bodyParser are express middlewares
app.use(cors());
app.use(bodyParser.json());

//the single endpoint
app.get("/", (req, res) => res.json({ hello: "world" }));

//error handler for unrecognised endpoints (1st error function 404)
app.use(handle.notFound);
//second error function 500
app.use(handle.errors);

app.listen(port, console.log(`Server started on ${port}`));
