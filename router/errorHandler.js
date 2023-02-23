
// Error handler for not found.
const notFoundError = (req, res, next) => {
    return res.status(404).json({
        statusCode : 404,
        message : `url : ${req.url} is not found`,
    });
};


// Get my error or manual error expres.
const errorHanler = (err, req, res, next) => {
    return res.json({
        statusCode : err.statusCode || 500,
        message : err.message || 'Internal server error',
    });
};



module.exports = {
    notFoundError,
    errorHanler
};