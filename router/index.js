const express = require('express')
const router = express.Router();




// Main route in express.
router.get('/', (req, res, next) => {
    try {
        const users = [
            {id : 1, name : 'Amrihossein', lastName : 'Ghodratnema'},
            {id : 1, name : 'Ali', lastName : 'Mazahery'},
            {id : 1, name : 'Milad', lastName : 'Nemayan'},
        ];
        
        return res.render('index', {users});

    } catch (error) {
        next(error);
    };
});


module.exports = {
    router
};