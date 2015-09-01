// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();

var db = require('../../database');
var Users = db.users;

router.get('/', function (req, res) {
  console.log("Called server.");
  Users.find({}, function(err, docs) {
    res.json(docs);
  })
});

router.delete('/deleteUser/:email', function (req, res) {
  Users.findOne({

      'email': req.params.email

  }, function (err, user) {

      // If there's an error, log it and return to user
      if (err || !user) {

          // Nice log message on your end, so that you can see what happened
          console.log('Couldn\'t find user to delete at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);

          // send the error
          res.status(500).json({
              'message': 'Internal server error deleting user. Please contact support@yourproject.com.'
          });
      }

      // If the user is found
      if (user) {
          user.remove(function(err) {
            if(err){
              // Nice log message on your end, so that you can see what happened
              console.log('Couldn\'t find user to delete at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);

              // send the error
              res.status(500).json({
                  'message': 'Internal server error deleting user. Please contact support@yourproject.com.'
              });
            }
            else {
              Users.find({}, function(err, docs) {
                res.json(docs);
              })  
            }
          });
      }
    });
});

// Expose the module
module.exports = router;
