var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
});
// define the home page route
router.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
});
// define the about route
router.get('/about', function (req, res) {
  res.sendFile(__dirname+"/about.html")
});

router.get('/signup', function (req, res) {
  res.send('Sign Up')
});

router.get('/login', function (req, res) {
  res.send('Log In')
});

module.exports = router;
