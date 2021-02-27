//this file is used for authentication i.e. for login

const { Mongoose } = require('mongoose');
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { collection } = require('./business');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            requrired: 'username is required'
        },

        /*password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        }
        */
       email:
       {
           type: String,
           default: '',
           trim: true,
           required: 'email Id is required'
       },

       displayName:
       {
           type: String,
           default: '',
           trim: true,
           required: 'Display Name is required'
       },
       created:
       {
           type: Date,
           default: Date.now
       },
       update:
       {
           type: Date,
           default: Date.now
       }
    


    },
    {
    collection: "users"
    }
);

//configure options for User Model
let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);