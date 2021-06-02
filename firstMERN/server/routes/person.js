const PersonController = require("../controllers/person");

module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/person', PersonController.newPerson);
}