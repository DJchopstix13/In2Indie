module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', { title: 'In2Indie'});
    });

    //facebook authentication
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
        res.sendfile('./web-client/views/index.jade');
    });

    app.get('/login', function (req, res){
        res.render('login', { title: 'Login to In2Indie'});
    });

    app.get('/signup', function (req, res) {
        res.render('signup', { title: 'Sign up for In2Indie'});
    });

    app.get('/sample-video', function (req, res) {
        res.render('sample-video', { title: 'View Sample-Video'});
    });

    app.get('/browse', function (req, res) {
        res.render('browse', { title: 'Browse'});
    });

    app.get('/profile', function (req, res) {
        res.render('profile', { title: 'profile'});
    });

    app.get('/settings', function (req, res) {
        res.render('settings', { title: 'Settings'});
    });

    app.get('/logout', function (req, res) {
        res.render('logout', {title: 'Logout'});
    });

    app.get('/about', function (req, res) {
        res.render('about', { title: 'About'});
    });

    app.get('/FAQ', function (req, res) {
        res.render('FAQ', { title: 'FAQ'});
    });

    app.get('/privacy', function (req, res) {
        res.render('privacy', { title: 'Privacy'});
    });

    app.get('/contact', function (req, res) {
        res.render('contact', { title: 'Contact Us'});
    });

}
