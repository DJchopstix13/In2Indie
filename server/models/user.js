/*
** Product model for In2Indie
*/

var http = require('http'), 
    pg = require('pg');

var userSchema = new Schema({
    name            : {
        first   : String,
        last    : { 
            type    : String,
            trim: true 
        }
    },
    email           : String,
    description     : String,
    userType        : String,
    picture         : Object
    
});