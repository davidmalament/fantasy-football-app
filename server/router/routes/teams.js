// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Teams = db.teams;
var Users = db.users;

router.get('/', function (req, res) {
  console.log("Fetching list of teams.");
  Teams.find({}, function(err, docs) {
    res.json(docs);
  })
});

// Setup the Route
router.post('/registerTeam', function (req, res) {

  // The posted information from the front-end
  var body = req.body;
  // Current time this occurred
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');

  var user = {};

  // Check to see if the user already exists
  // using their email address
  Teams.findOne({

      'manager': body.manager._id

  }, function (err, team) {

      // If there's an error, log it and return to user
      if (err) {

          // Nice log message on your end, so that you can see what happened
          console.log('Couldn\'t create new team at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);

          // send the error
          res.status(500).json({
              'message': 'Internal server error from signing up a new team. Please contact support@yourproject.com.'
          });
      }

      // If the team doesn't exist, create one
      if (!team) {
          console.log('Creating a new user at ' + color.green(time) + ' with the email: ' + color.green(body.email));

          // setup the new team
          var newTeam = new Teams({
              teamname: body.teamname,
              manager: body.manager._id,
              starters: [],
              bench: []
          });

          // save the user to the database
          newTeam.save(function (err, savedTeam, numberAffected) {

              if (err) {
                  console.log('Problem saving the team ' + color.yellow(body.email) + ' due to ' + err);
                  res.status(500).json({
                      'message': 'Database error trying to sign up.  Please contact support@yourproject.com.'
                  });
              }

              // Log success and send the filtered user back
              console.log('Successfully created new team: ' + color.green(body.email));

              res.status(201).json({
                  'message': 'Successfully created new team',
                  'team': savedTeam
              });

          });
      }

      // If the user already exists...
      if (team) {
          res.status(409).json({
              'message': body.manager + ' already has a team!'
          });
      }

  });

});

// Expose the module
module.exports = router;
