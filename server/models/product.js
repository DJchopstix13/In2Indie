/*
** Product model for In2Indie
*/

var pg = require('pg'), //Node package for PostGreSQL
    schema = pg.Schema;
    //ObjectId = Schema.ObjectId;

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

module.export = pg.model('Product', productSchema);