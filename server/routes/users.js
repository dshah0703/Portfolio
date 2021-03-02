// File Name : app.js
//  Student Name : Devanshi Shah
//    Student Id   : 301175169
//    Date         : 13 -02 -2021 

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
