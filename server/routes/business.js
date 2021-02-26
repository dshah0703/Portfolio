let express =  require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our business model
let business = require('../models/business');

let businessController = require('../controllers/business');

/*Get Route for the Business List Page- Read Operation*/
router.get('/', businessController.displayBusinessList);


/* Get Route for Displaying the Add Page - Create Operation*/
router.get('/add', businessController.displayAddPage);


/* Post Route for Processing the Add Page -  Create Operation*/
router.post('/add', businessController.processAddPage);


/* Get Route for Displaying the Edit Page - Edit Operation*/
router.get('/edit/:id',businessController.displayEditPage);


/* Post Route for Processing the Edit Page - Edit Operation*/
router.post('/edit/:id',businessController.processEditPage);


/*Get method to perform Deletion - Delete Operation*/
router.get('/delete/:id', businessController.performDelete);

module.exports = router;