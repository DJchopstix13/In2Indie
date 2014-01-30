/*
** Product model for In2Indie
*/

var http = require('http'), 
    pg = require('pg');

var productSchema = new schema({
    name        : String,
    type        : String,
    description : String,
    price        : {
        min    : Number,
        max    : Number
    },
    product    : Object

});