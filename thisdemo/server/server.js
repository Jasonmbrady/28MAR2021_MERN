const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('./config/mongoose');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/routes')(app);

app.listen(8000, () => {console.log("Listening on port 8000")})