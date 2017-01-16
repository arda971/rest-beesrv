// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var hivesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    colonyid: {
        type: String,
        required: true
    },
    colonyname: {
        type: String,
        default:""
    },
    type: {
        type: String,
        required: true
    },

    siteid: {
        type: String,
        required: true
    },
    sitename: {
        type: String,
        default:""
    },
    status: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Hives = mongoose.model('Hives', hivesSchema);

// make this available to our Node applications
module.exports = Hives;

