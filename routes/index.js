var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Home'});
});

/*GET home page.*/
router.get('/home',function(req,res,next){
  res.render('index',{title:'Home'});
});
/*GET About Me Page */
router.get('/about',function(req,res,next){
  res.render('index',{title:'About Me'});
});
/*GET Project Page */
router.get('/project',function(req,res,next){
  res.render('index',{title:'Project'});
});
/*GET Service Page*/
router.get('/service',function(req,res,next){
  res.render('index',{title:'Service'});
});
/*GET Contact Me Page*/
router.get('/contactme',function(req,res,next){
  res.render('index',{title:'Contact Me'});
});


module.exports = router;
