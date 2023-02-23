const express = require('express');
const path = require('path');
const { router } = require('./router');
const { notFoundError, errorHanler } = require('./router/errorHandler');
const app = express();


// Set options
app.set('view engin' , 'pug');    // Set pug template engin 
app.set('view' , path.join(__dirname , 'view'));    // Set path views.


// Middleware options.
app.use(express.json());    // body-parser for json.
app.use(express.urlencoded({extends : true}));    // body-parser urlencoded.


app.use(router);    // All router in server.
app.use(notFoundError);     // Not found error in server. 
app.use(errorHanler);    // My error handler => All errors.


// Create server on port 8000.
app.listen(8000, () => console.log('Running server on port 8000...'));






