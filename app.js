/*
 * In2Indie Web Application
 *
 */

var express = require('express'),
    routes = require('./server/routes'),
    user = require('./server/routes/user'),
    http = require('http'),
    path = require('path'),
    db = require('./server/models'),
    stylus = require('stylus');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/icons/in2indie.png')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
//app.get('/users', user.list)

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

