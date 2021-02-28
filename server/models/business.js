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