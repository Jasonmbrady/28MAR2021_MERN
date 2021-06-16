const {Person} = require('../models/person');
module.exports = {
    getAll: (req, res) => {
        Person.find()
            .then(person => res.json(person))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Person.create(req.body)
            .then(newPerson => res.json(newPerson))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Person.deleteOne({_id: req.params.id})
            .then(confirm => {res.json(confirm)})
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Person.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => response.json(err))
    },
    getOne: (req, res) => {
        Person.findById(req.params.id)
            .then(person => res.json(person))
            .catch(err => res.status(400).json(err))
    }
}