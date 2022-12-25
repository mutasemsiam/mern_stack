const PlayerController = require('../controllers/player.controller');
module.exports = app =>{
    app.post('/api/player', PlayerController.createPlayer);
    app.get('/api/player', PlayerController.findAllPlayers);
    app.get('/api/player/:id', PlayerController.findOnePlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);
}
