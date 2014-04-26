/*
 * In2Indie App
 * 
 */

/*Define environment variables*/
var express = require('express'),
    routes = require('./server/routes'),
    user = require('./server/routes/user'),
    http = require('http'),
    path = require('path'),
    db = require('./server/models'),
    controllers = require('./web-client/controllers/main'),
    stylus = require('stylus');

var app = express();

/*Define environment calls*/
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'web-client', 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'web-client', 'public')));


//Option #1: using sub-apps via use method
/*app.use('./server/', require('./server/app.js').app)
      use('./web-client/', require('./web-client/app.js').app)
      listen(3000);
      */

//Option #2: using sub-apps via configure function
/*app.configure(function () {
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
})*/

//Option #3: using require method - based off of former
//web-client app.js
require('./web-client/controllers/main')(app);

/*development only*/
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};

//Only if error handling fails
/*http.createServer(app).listen(app.get('port'), function(){
  //  console.log('Express server listening on port ' + app.get('port'));
});*/


/*Error handling for server side*/
db.sequelize.sync().complete(function (err) {
    if (err) {
        throw err;
    } else {
        http.createServer(app).listen(app.get('port'),
                function () {
                console.log('Express server listening on port ' + app.get('port'));
            }
        )
    }
})


