// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var inspectionsSchema = new Schema({
    date: {
        type: String,
        required: true,
        
    },
    hiveid: {
        type: String,
        required: true
    },
    hivename: {
        type: String,
        default:""
    },
    siteid: {
        type: String,
        default:""
    },
    sitename: {
        type: String,
        default:""
    },
    status: {
        type: Boolean,
         default: false
    },

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Inspections = mongoose.model('Inspections', inspectionsSchema);

// make this available to our Node applications
module.exports = Inspections;

 