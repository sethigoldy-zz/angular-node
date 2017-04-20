var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
var mongo_url='mongodb://localhost:27017';
app.use(favicon(path.join(__dirname, '../client/app', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
var MongoClient = require('mongodb').MongoClient;

if ('development' == app.get('env')) {
    // This will change in production since we'll be using the dist folder
//    app.get('/quotes', (req, res) => {
//        console.log('Hellooooooooooooooooo!');
//        res.send(200, 'working');
//    });
    app.post('/', (req, res) => {
        var result=[];
        MongoClient.connect(mongo_url+'/animals', function (err, db) {
          if (err) throw err

          db.collection('mammals').find().toArray(function (err, result2) {
            if (err) throw err

            res.send(result2);
          });
        });
        //res.send(result);
    });
    app.use(express.static(path.join(__dirname, 'dist')));

    // This is the new way to handle errors in Express 4. not errorHandler().
    // For more about error-first best practices see http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.send(500, 'Something broke!');
    });
}

/**
 * Production Settings
 */
if ('production' == app.get('env')) {
    app.use(express.static(path.join(__dirname, '../client/dist')));
}

/* Add this to fire the server */
var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
