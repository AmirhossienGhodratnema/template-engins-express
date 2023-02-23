const express = require('express')
const router = express.Router();





router.get('/', (req, res, next) => {
    try {
        if(req.body)
        return res.json('ok...');     
    } catch (error) {
        next(error);
    };
});


module.exports = {
    router
};