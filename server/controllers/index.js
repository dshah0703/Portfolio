let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the User Model Instance
let userModel = require('../models/user');
let User = userModel.User //alias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home' });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: 'About'  });
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('contactme', {title: 'Project' });
}

module.exports.displayServicePage = (req, res, next) => {
    res.render('project', {title: 'Service' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('service', {title: 'Contact Me' });
}

module.exports.displayLoginPage = (req, res, next) => {
    //check if the user is already login
    if(!req.user)
    {
        res.render('auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',
    (err, user, info) =>{
        //server error?
        if(err)
        {
            return next(err);

        }
        // is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err)=> {
            //server error?
            if(err)
            {
                return next(err);

            }
            return res.redirect('/business-list')
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    //check if the user is not logged in or not available
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');

    }
}
module.exports.processRegisterPage = (req, res, next) => {
    //instantiate a user object
    let newUser = new User({
        username: req.body.email,
        displayName: req.body.displayName

    });

    User.register(newUser, req.body.password, (err) => 
    {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'

                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else{
            //if no error exists, register the user successfully

            //redirect the user and authenticate them
            return passport.authenticate('local')(req, res, () =>{
                res.redirect('/business-list')
            });
        }
    });
}
module.exports.performLogout = (req, res, next) => {
    res.logout();
    res.redirect('/');
}