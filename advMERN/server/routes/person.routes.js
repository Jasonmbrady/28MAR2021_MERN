const PersonController = require("../controllers/person.controller")

module.exports = app => {
    app.get('/api/person', PersonController.allPeople);
    app.get('/api/person/:id', PersonController.onePerson);
    app.post('/api/person', PersonController.createPerson);
    app.put('/api/person/:id', PersonController.updatePerson);
    app.delete('/api/person/:id', PersonController.deletePerson);
}