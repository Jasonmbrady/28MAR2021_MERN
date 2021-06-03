const { Person } = require("../models/Person")

module.exports = {
    index: (req, res) => {
        res.json({message: "Hello, world!"})
    },
    allPersons: (req, res) => {
        Person.find()
            .then( allPersons => res.json({persons: allPersons}))
            .catch( err => res.json({message: "Something went wrong"}));
    },
    onePerson: (req, res) => {
        Person.findOne({_id: req.params.id})
            .then( thisPerson => res.json({person: thisPerson}))
            .catch( err => res.json({message: "Something went wrong"}));
    },
    createPerson: (req, res) => {
        Person.create(req.body)
            .then(newPerson => res.json({ person: newPerson}))
            .catch( err => res.json({message: "Something went wrong"}));
    },
    updatePerson: (req, res) => {
        Person.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then(thisPerson => res.json({person: thisPerson}))
            .catch( err => res.json({message: "Something went wrong"}));
    },
    deletePerson: (req, res) => {
        Person.deleteOne({_id: req.params.id})
            .then( result => res.json({result: result}))
    }
}