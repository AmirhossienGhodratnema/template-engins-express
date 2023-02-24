const express = require('express');
const path = require('path');
const { router } = require('./router');
const { notFoundError, errorHanler } = require('./router/errorHandler');
const app = express();



// Middleware options.
app.use(express.json());    // body-parser for json.
app.use(express.urlencoded({extends : true}));    // body-parser urlencoded.
app.use('/static', express.static('public'));    // Set static file directory.

// Set views options.
app.set('view engine' , 'pug');    // Set pug template engin 
app.set('views' , path.join(__dirname, 'views'));    // Set path views.



app.use(router);    // All router in server.
app.use(notFoundError);     // Not found error in server. 
app.use(errorHanler);    // My error handler => All errors.


// Create server on port 8000.
app.listen(8000, () => console.log('Running server on port 8000...'));






