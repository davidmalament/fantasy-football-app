/**
 * Our Schema for Teams
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Team Schema
var teamSchema = new Schema({
    teamname: { type: String, required: true },
    manager: { type: String, ref:'User', required: true},
    starters : [{ type: String, ref: 'Player'}],
    bench : [{ type: String, ref: 'Player'}],
});

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;
