const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'First name is required'],
        minlength: [2, 'Name must be at least two characters']
    },
    prefPosition: {
        type: String,
    },
    status: 
    { game1: Number, game2: Number ,game3: Number}
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);
