let express =  require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessController = require('../controllers/business');

//helper function for gaurd purpose
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/*Get Route for the Business List Page- Read Operation*/
router.get('/', businessController.displayBusinessList);


/* Get Route for Displaying the Add Page - Create Operation*/
router.get('/add', requireAuth, businessController.displayAddPage);


/* Post Route for Processing the Add Page -  Create Operation*/
router.post('/add',requireAuth, businessController.processAddPage);


/* Get Route for Displaying the Edit Page - Edit Operation*/
router.get('/edit/:id', requireAuth, businessController.displayEditPage);


/* Post Route for Processing the Edit Page - Edit Operation*/
router.post('/edit/:id', requireAuth, businessController.processEditPage);


/*Get method to perform Deletion - Delete Operation*/
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;