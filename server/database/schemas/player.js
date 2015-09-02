/**
 * Our Schema for Players
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Player Schema
var playerSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    position: { type: String, required: true },
    team: { type: String, required: true },
    bye: { type: Number, required: true },
    positionrank : { type: Number, required: true},
    overallrank : { type: Number, required: true},
    rostered: {type: Boolean, required: true}
});

var Player = mongoose.model('Player', playerSchema);

module.exports = Player;
