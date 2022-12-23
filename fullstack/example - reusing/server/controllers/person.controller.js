const Person = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {

    // we can do it like this:
    // Person.create(request.body)

    // OR like this:
    // const firstName = request.body.firstName;
    // const lastName = request.body.lastName;
    // Person.create({firstName, lastName})

    //OR like this:

    const { firstName, lastName } = request.body;  //This is destructuring => firstName = request.body.firstName 
    Person.create({
        firstName,
        lastName
    })

        .then(newPerson => response.json({person: newPerson}))
        .catch(err => response.status(400).json(err))
}

module.exports.findAllPersons = (request, response) => {
    Person.find()
        .then(allPersons => response.json({persons: allPersons}))
        .catch(err => response.json(err));
}

module.exports.findOnePerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedPerson => response.json({person: updatedPerson}))
        .catch(err => response.status(400).json(err))
  
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}