// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var tasksSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    site: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
         default: false
    },

}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Tasks = mongoose.model('Tasks', tasksSchema);

// make this available to our Node applications
module.exports = Tasks;

  