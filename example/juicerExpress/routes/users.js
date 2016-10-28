var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sHello = {
    say: 'hello',
    range: 'world'
  }
  res.render('error', sHello);
});

module.exports = router;
