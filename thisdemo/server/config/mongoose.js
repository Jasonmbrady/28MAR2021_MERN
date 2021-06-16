const mongoose = require('mongoose');
const db = "testy";
mongoose.connect("mongodb://localhost/" + db)
    .then(()=> console.log("connected to database"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(err => console.log("Nope"));
