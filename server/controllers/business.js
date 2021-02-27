let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let business = require('../models/business');


module.exports.displayBusinessList = (req,res,next) => {
    business.find((err, businesslist) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(BusinessList);
           res.render('business/list',
           {title: 'Business', 
           BusinessList: businesslist,
            displayName: req.user ? req.user.displayName : ''});
        }
    }).sort({"name":1})
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {title: 'Add Contacts'})
    
}

module.exports.processAddPage = (req,res,next) => {

    let newBusiness = business({
        "name" : req.body.name,
        "contact_number" :req.body.contact_number,
        "email": req.body.email
       
    });
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
    });
}

module.exports.displayEditPage =  (req, res, next) => {
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
            res.render('business/edit', {title: 'Edit Business Contacts', business: businessToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }

    });


}

module.exports.processEditPage = (req,res,next) => {
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


}

module.exports.performDelete = (req,res,next) => {
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

}