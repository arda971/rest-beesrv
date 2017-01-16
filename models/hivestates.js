// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var hivestatesSchema = new Schema({
    value: {
        type: String,
        required: true,
        unique: true
    },
    label: {
        type: String,
        required: true
    },
   

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Hivestates = mongoose.model('Hivestates', hivestatesSchema);

// make this available to our Node applications
module.exports = Hivestates;

