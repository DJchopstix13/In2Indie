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
    stylus = require('stylus'), 
    passport = require('passport'), 
    flash = require('connect-flash'), 
    LocalStrategy = require('passport-local').Strategy;

var app = express();

/*Define environment calls*/
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'web-client', 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/icons/in2indie.png')));
app.use(express.logger('dev'));
app.use(express.cookieParser());  
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'web-client', 'public')));
app.use(express.session({ secret: 'secret' }));
app.use(flash());
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

/*Implementing passport - middleware for authentication*/
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { 
            return done(err); 
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.use(function(req,res,next){
    req.db = db;
    next();
});

require('./web-client/controllers/main')(app);

/*development only*/
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};

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

