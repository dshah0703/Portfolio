let mongoose = require('mongoose');
//create a model class, (Model is just a class.)
let businessModel = mongoose.Schema({
    name : String,
    contact_number : String,
    email : String
},
{
    collection : "business"
});

module.exports = mongoose.model('business',businessModel);