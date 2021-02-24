let express =  require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our business model
let business = require('../models/business');

/*Get Route for the Business List Page- Read Operation*/
router.get('/',(req,res,next) => {
    business.find((err, businesslist) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(BusinessList);
           res.render('business/list',{title: 'Business', BusinessList: businesslist})
        }
    });
});

module.exports = router;
/* Get Route for Displaying the Add Page - Create Operation*/
router.get('/add',(req,res,next) => {

});

/* Post Route for Processing the Add Page -  Create Operation*/
router.post('/add',(req,res,next) => {

});


/* Get Route for Displaying the Edit Page - Edit Operation*/
router.get('/edit/id:',(req,res,next) => {

});


/* Post Route for Processing the Edit Page - Edit Operation*/
router.post('/edit/id:',(req,res,next) => {

});


/*Get method to perform Deletion - Delete Operation*/
router.get('/delete/id:',(req,res,next) => {

});

