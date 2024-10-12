modeles.exports.notfound = (req, res, next) =>{
    const err = new Error('Not found');
    err.status = 404;

    next(err);
}

modules.export.errors = (err, req, res, next) =>{
    res.status(err.status || 500 ).json({
        err: err.message || 'Something went wrong'
    });
}