const express = require("express");
const handle = require("./handlers");

const app = express();
const port = 4000;

//the single endpoint
app.get("/", (req, res) => res.json({ hello: "world" }));

//error handler for unrecognised endpoints (1st error function 404)
app.use(handle.notFound);
//second error function 500
app.use(handle.errors);

app.listen(port, console.log(`Server started on ${port}`));
