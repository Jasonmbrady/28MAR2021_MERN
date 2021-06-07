const {Person} = require('../models/Person');

module.exports = {
    onePerson: (req, res) => {
        Person.findOne({_id: req.params.id})
        .then( person => res.json(person))
        .catch( err => res.status(400).json(err))
    },
    allPeople: (req, res) => {
        Person.find({})
            .then( people => res.json(people))
            .catch( err => res.status(400).json(err))
    },
    createPerson: (req, res) => {
        Person.create(req.body)
        .then( person => res.json(person))
        .catch( err => res.status(400).json(err))
    },
    updatePerson: (req, res) => {
        Person.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then( updatedPerson => res.json(updatedPerson))
            .catch( err => res.status(400).json(err))

    },
    deletePerson: (req, res) => {
        Person.findByIdAndDelete({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    }

}