const notFoundError = (req, res, next) => {
    return res.status(404).json({
        statusCode : 404,
        message : `url : ${req.url} is not found`,
    });
};

const errorHanler = (err, req, res, next) => {
    return res.json({
        statusCode : err.status || 500,
        message : req.message || 'Internal server error',
    });
};



module.exports = {
    notFoundError,
    errorHanler
};