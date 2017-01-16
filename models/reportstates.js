// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var reportstatesSchema = new Schema({
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
var Reportstates = mongoose.model('Reportstates', reportstatesSchema);

// make this available to our Node applications
module.exports = Reportstates;

