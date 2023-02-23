const express = require('express')
const router = express.Router();




// Main route in express.
router.get('/', (req, res, next) => {
    try {
        console.log(req.body)
        if(req.body.name == 'Amirhossein') throw {statusCode : 400 , message : 'test test test'}
        return res.json('ok...');     
    } catch (error) {
        next(error);
    };
});


module.exports = {
    router
};