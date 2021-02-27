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

/* Post Route for Displaying  the Login Page */
router.get('/login',indexController.displayLoginPage);


/*Get method to Processing Login Page*/
router.post('/login', indexController.processLoginPage);

/*Post Route for Displaying  the Register Page */
router.get('/register', indexController.displayRegisterPage);


/*Get method to Processing the Register Page*/
router.post('/register', indexController.processRegisterPage);

/*Get method to perform LogOut Page*/
router.get('/logout', indexController.performLogout);


module.exports = router;
