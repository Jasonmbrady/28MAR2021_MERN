const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minLength: [3, "Name must be at least 3 characters"]
        },
    email: {
        type: String, 
        required: true,
        minLength: [3, "Email must be at least 3 characters"]
    }
},{timestamps: true})

module.exports.Person = mongoose.model('Person', PersonSchema)