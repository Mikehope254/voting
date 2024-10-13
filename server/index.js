
const express = require('express');




const app = express();
const port = 4000;

//the single endpoint
app.get('/',(req, res) => res.json({ hello:'world'}));

//error handler for unrecognised endpoints (1st error function 404)
app.use((req, res, next) =>{
    const err = new Error('Not found');
    err.status = 404;

    next(err);
})
//second error function 500
app.use((err, req, res, next) =>{
    res.status(err.status || 500 ).json({
        err: err.message || 'Something went wrong'
    });
});

app.listen (port,console.log(`Server started on ${port}`))