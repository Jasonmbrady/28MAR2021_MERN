const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [3, "First Name must be at least 3 chartacters"]

    },
    lName: {
        type: String,
        required: [true, "Last Name is required!"],
        minlength: [3, "Last Name must be at least 3 chartacters"]
    },
    age: {
        type: Number,
        required: [true, "Age is required!"],
        min: [18, "Must be 18 or older to join!"]

    }
}, {timestamps: true});

// This allows Mongoose to read our model so we don't have to
// require it in the mongoose config
module.exports.Person = mongoose.model('Person', PersonSchema);