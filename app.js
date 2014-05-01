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
    FacebookStrategy = require('passport-facebook').Strategy;
 
var FACEBOOK_APP_ID = '1507032019518117';
var FACEBOOK_APP_SECRET = '2c0343cdf61802decbcd8239db59fa9f';

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

app.use(passport.initialize());
app.use(passport.session());
/*
//Implementing passport - middleware for authentication
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { 
            return done(err); 
        }
        if (!user) {
            return done(null, false, { 
                message: 'Incorrect username.' 
            });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { 
                message: 'Incorrect password.' 
            });
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

//development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};
*/

/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
 
var FACEBOOK_APP_ID = '1507032019518117'
var FACEBOOK_APP_SECRET = '2c0343cdf61802decbcd8239db59fa9f';
 
var app = express();
 
// all environments
 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
 
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//using facebook auth
passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://98.158.149.241/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    done(null, profile);
  });
}));
 
passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
 
app.get('/auth/facebook', passport.authenticate('facebook'));
 
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/success',
  failureRedirect: '/error'
}));
 
app.get('/success', function(req, res, next) {
  res.send('Successfully logged in.');
});
 
app.get('/error', function(req, res, next) {
  res.send("Error logging in.");
});
 
app.get('/', function(req, res, next) {
  res.sendfile('./html/auth.html');
});
 
 
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

//Error handling for server side
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

