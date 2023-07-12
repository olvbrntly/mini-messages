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
  res.render('index', { 
    title: 'Mini Messages', 
    messages:messages, 
  });
});


// GET new item
/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  let messageUser = req.body.name;
  let messageText = req.body.text;
  let added = new Date();
  messages.push({
    text:messageText,
    user:messageUser,
    added:added
    })

  res.redirect('/')
})


module.exports = router;
