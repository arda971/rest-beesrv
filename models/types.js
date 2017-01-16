// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var typesSchema = new Schema({
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
var Types = mongoose.model('Types', typesSchema);

// make this available to our Node applications
module.exports = Types;

