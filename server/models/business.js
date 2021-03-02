// File Name : app.js
//  Student Name : Devanshi Shah
//    Student Id   : 301175169
//    Date         : 13 -02 -2021 

let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "businesses"
});

module.exports = mongoose.model('Business', businessModel);