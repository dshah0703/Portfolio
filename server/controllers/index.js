let express = require('express');
let router = express.Router();

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