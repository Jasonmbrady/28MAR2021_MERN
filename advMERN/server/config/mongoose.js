const mongoose = require('mongoose');
db = "advMERN";

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Connected to Mongo Database: ${db}`))
    .catch( err => console.log("Didn't successfully connect...", err));