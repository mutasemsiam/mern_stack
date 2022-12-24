const Author = require("../models/author.model");

module.exports.createAuthor = (request, response) => {

    const { name } = request.body;  //This is destructuring => name = request.body.name 
    Author.create({
        name
    })

        .then(newAuthor => response.json(newAuthor))
        .catch(err => response.status(400).json(err))
}

module.exports.findAllAuthors = (request, response) => {
    Author.find()
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json(err));
}

module.exports.findOneAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.status(400).json(err))

}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}