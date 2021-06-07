const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
require('./config/mongoose');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/person.routes')(app);

app.listen(port, () => console.log(`Express server listening on ${port}`));