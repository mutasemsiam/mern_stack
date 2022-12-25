const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'First name is required'],
        minlength: [2, 'Name must be at least two characters']
    },
    prefPosition: {
        type: String,
    }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);
