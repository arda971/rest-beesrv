// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var feedbacksSchema = new Schema({
    firstName: {
        type: String,
        required: true,
       
    },
    lastName: {
        type: String,
        required: true
    },

    agree: {
        type: Boolean,
        default:false
    },
    email: {
        type: String,
        required: true
    },
    

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Feedbacks = mongoose.model('Feedbacks', feedbacksSchema);

// make this available to our Node applications
module.exports = Feedbacks;
