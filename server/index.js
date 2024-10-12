const express = require('express');

const handle = require('./handlers') //to import local file

const app = express();
const port = 4000;

//the single endpoint
app.get('/',(req, res) => res.json({ hello:'world'}));

//error handler for unrecognised endpoints (1st error function 404)
app.use(handle.notfound)
//second error function 500
app.use(errors);

app.listen (port,console.log(`Sever started on ${port}`))