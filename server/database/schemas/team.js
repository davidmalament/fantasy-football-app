/**
 * Our Schema for Teams
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Team Schema
var teamSchema = new Schema({
    teamname: { type: String, required: true },
    manager: { type: String, ref:'User', required: true},
    QB: { type: String, ref: 'Player'},
    RB1: { type: String, ref: 'Player'},
    RB2: { type: String, ref: 'Player'},
    WR1: { type: String, ref: 'Player'},
    WR2: { type: String, ref: 'Player'},
    FLEX: { type: String, ref: 'Player'},
    TE: { type: String, ref: 'Player'},
    D: { type: String, ref: 'Player'},
    K: { type: String, ref: 'Player'},
    BE1: { type: String, ref: 'Player'},
    BE2: { type: String, ref: 'Player'},
    BE3: { type: String, ref: 'Player'},
    BE4: { type: String, ref: 'Player'},
    BE5: { type: String, ref: 'Player'},
    BE6: { type: String, ref: 'Player'},
    BE7: { type: String, ref: 'Player'}
});

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;
