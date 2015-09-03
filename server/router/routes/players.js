// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Players = db.players;

router.get('/', function (req, res) {
  console.log("Fetching list of players.");
  Players.find({}).exec(function(err, docs) {
    res.json(docs);
  });
});

// Expose the module
module.exports = router;
