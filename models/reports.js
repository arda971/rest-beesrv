// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var reportsSchema = new Schema({
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
    colonyid: {
        type: String,
        default:""
    },
    colonyname: {
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
    details: {
        type: String,
        default:""
    },
    inspectionid: {
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
var Reports = mongoose.model('Reports', reportsSchema);

// make this available to our Node applications
module.exports = Reports;

