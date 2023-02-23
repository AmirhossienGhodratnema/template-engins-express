const express = require('express')
const router = express.Router();




// Main route in express.
router.get('/', (req, res, next) => {
    try {
        return res.json('Main route is ok...');    
    } catch (error) {
        next(error);
    };
});


module.exports = {
    router
};