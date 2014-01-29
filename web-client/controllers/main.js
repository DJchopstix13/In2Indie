module.exports = function (app) {

  /*app.get('/', function(req, res) {
    if (req.session.isLoggedIn) {
      res.redirect('/home');
    } else {
      res.render('login', {title: 'Login'});
    }
  });*/
  
  app.get('/', function(req, res) {
    res.render('index', {title: 'In2Indie Home'});
  });

  app.get('/signup', function(req, res) {
    res.render('signup', {title: 'Sign up'});
  });

  app.get('/play', function(req, res) {
    res.render('play', {title: 'Play'});
  });
  
  app.get('/browse', function(req, res) {
    res.render('browse', {title: 'Browse'});
  });

  app.get('/profile', function(req, res) {
    res.render('profile', {title: 'profile'});
  });

  app.get('/settings', function(req, res) {
    res.render('settings', {title: 'Settings'});
  });
  
  app.get('/logout', function(req, res) {
    res.render('logout', {title: 'Logout'});
  });
  
  app.get('/about', function(req, res) {
    res.render('about', {title: 'About Chuzr'});
  });

  app.get('/FAQ', function(req, res) {
    res.render('FAQ', {title: 'FAQ'});
  });

  app.get('/privacy', function(req, res) {
    res.render('privacy', {title: 'Privacy'});
  });

}
