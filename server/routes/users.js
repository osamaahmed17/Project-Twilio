var express = require('express');
var router = express.Router();
var Token=require('../SetToken')


/* GET users listing. */

router.get('/', function(req, res, next) {
  console.log(Token.token())
  res.send(Token.token());
});

module.exports = router;
