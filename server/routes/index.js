var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/*GET home page.*/
router.get('/home', indexController.displayHomePage);

/*GET About Me Page */
router.get('/about', indexController.displayAboutPage);

/*GET Project Page */
router.get('/project', indexController.displayProjectPage);


/*GET Service Page*/
router.get('/service', indexController.displayServicePage);

/*GET Contact Me Page*/
router.get('/contactme', indexController.displayContactPage);


module.exports = router;
