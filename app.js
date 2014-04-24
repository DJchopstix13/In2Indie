/*
 * In2Indie App
 * 
 */

var express = require('express');
var http = require('http');
var path = require('path');
var stylus = require('stylus');
var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//Server and Web-Client sub- application here
//Option #1:
//app.use('./server/', require('./server/app.js').app)
  //  use('./web-client/', require('./web-client/app.js').app)
    //listen(3000);

//Server and Web-Client sub- application here
//Option #2:
app.configure(function () {
	app.use(express.compress());
    app.use(express.logger('dev'));
    app.set('json spaces',0);
    app.use(express.limit('2mb'));
    app.use(express.bodyParser());
    app.use('./server/app.js', app.router);
    app.use('./web-client/app.js', app.router);
    app.use(function(err, req, res, callback){
        res.json(err.code, {});
    });
})

// development only
/*if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};*/

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
