const messages = [
  {
    text:"Hi there!",
    user:"Armando",
    added: new Date()
  },
  {
    text:"Hello world",
    user:"Charles",
    added:new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messages', messages:messages });
});

module.exports = router;
