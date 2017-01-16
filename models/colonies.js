// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var coloniesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    race: {
        type: String,
        required: true
    },

    queen: {
        type: String,
        default:""
    },
    status: {
        type: String,
        required: true
    },
    hiveu: {
        type: Boolean,
        default:false
    },

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Colonies = mongoose.model('Colonies', coloniesSchema);

// make this available to our Node applications
module.exports = Colonies;
