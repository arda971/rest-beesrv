// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var sitesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    nbhive: {
        type: String,
        default:""
    },
    status: {
        type: Boolean,
        required: true
    },
    

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Sites = mongoose.model('Sites', sitesSchema);

// make this available to our Node applications
module.exports = Sites;
  