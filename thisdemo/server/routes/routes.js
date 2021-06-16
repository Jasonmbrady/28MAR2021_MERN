const PersonController = require("../controllers/person");

module.exports = app => {
    app.get('/api/person', PersonController.getAll);
    app.post('/api/person', PersonController.create);
    app.put('/api/person/:id', PersonController.update);
    app.delete('/api/person/:id', PersonController.delete);
    app.get('/api/person/:id', PersonController.getOne);
}