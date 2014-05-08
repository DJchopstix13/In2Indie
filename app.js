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
    pg = require('pg'),
    FacebookStrategy = require('passport-facebook').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy;

var app = express();

/*Define environment calls*/
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'web-client', 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/img/favicon.png')));
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

//initiliaize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.session({
    secret: 'secret'
}));

//facebook and twitter id info
var FACEBOOK_APP_ID = '673874075999542', 
    FACEBOOK_APP_SECRET = 'ffbc5a6d95128ca46225dbcd0d7f4c9b', 
    TWITTER_APP_ID = 'GkFOZ0bTBvC80SAAvyzj1AqpE'
    TWITTER_APP_SECRET = 'JbuZsUM9w9uJOtaTB1SQoElnjEKOFsNwysAoQQBSKkN1U71w9s';

//using facebook auth
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://54.187.138.161/auth/facebook/callback'
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        done(null, profile);
    });
}));

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_APP_ID,
    consumerSecret: TWITTER_APP_SECRET,
    callbackURL: 'http://54.187.138.161/auth/twitter/callback'
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        done(null, profile);
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'web-client', 'public')));
app.use(express.session({
    secret: 'secret'
}));
app.use(flash());

require('./web-client/controllers/main')(app);

//facebook authentication
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/error'
}));

//twitter authentication
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/success',
    failureRedirect: '/error'
}));

//development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
};

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