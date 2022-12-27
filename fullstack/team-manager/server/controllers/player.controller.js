const Player = require("../models/player.model");


module.exports.createPlayer = (request, response) => {

    const { name, prefPosition, status } = request.body;  //This is destructuring => firstName = request.body.firstName 
    Player.create({
        name,
        prefPosition,
        status
    })

        .then(newPlayer => response.json(newPlayer))
        .catch(err => response.status(400).json(err))
}

module.exports.findAllPlayers = (request, response) => {
    Player.find()
        .then(allPlayers => response.json(allPlayers))
        .catch(err => response.json(err));
}

module.exports.findOnePlayer = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.status(400).json(err))
  
}

module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
