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
           res.render('business/list',{title: 'Business', BusinessList: businesslist});
        }
    });
});

/* Get Route for Displaying the Add Page - Create Operation*/
router.get('/add', (req, res, next) => {
    res.render('business/add', {title: 'Add Contacts'})
    
});

/* Post Route for Processing the Add Page -  Create Operation*/
router.post('/add', (req,res,next) => {

    let newBusiness = business({
        "name" : req.body.name,
        "contact_number" :req.body.contact_number,
        "email": req.body.email
       
    })
    business.create(newBusiness, (err, Business) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business contact list
            res.redirect('/business-list');
        }
    })
});


/* Get Route for Displaying the Edit Page - Edit Operation*/
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/edit', {title: 'Edit Business Contacts', business: businessToEdit});
        }

    })


});


/* Post Route for Processing the Edit Page - Edit Operation*/
router.post('/edit/:id',(req,res,next) => {
    let id = req.params.id

    let updateBusiness = business({
        "_id" : id,
        "name" : req.body.name,
        "contact_number" : req.body.contact_number,
        "email" : req.body.email

    });

    business.updateOne({_id: id}, updateBusiness, (err) => {
            if (err) 
            {
                console.log(err);
                res.end(err);
            }

            else 
            {
                //refresh the business contact list again
                res.redirect('/business-list');
            }
        });


});


/*Get method to perform Deletion - Delete Operation*/
router.get('/delete/:id', (req,res,next) => {
    let id = req.params.id;

    business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business contact list
            res.redirect('/business-list');

        }
    });

});
module.exports = router;