const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/thisdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connected to database!"))
    .catch( err => console.log("oops! something went wrong!", err))


