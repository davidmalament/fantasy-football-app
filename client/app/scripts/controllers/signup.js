'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('SignupCtrl', function ($scope, $http, userservice) { // note the added $http depedency

  // Here we're creating some local references
  // so that we don't have to type $scope every
  // damn time
  var user,
      signup;

  // Here we're creating a scope for our Signup page.
  // This will hold our data and methods for this page.
  $scope.signup = signup = {};

  // In our signup.html, we'll be using the ng-model
  // attribute to populate this object.
  signup.user = user = {};

  // This is our method that will post to our server.
  signup.submit = function () {

    // make sure all fields are filled out...
    // aren't you glad you're not typing out
    // $scope.signup.user.firstname everytime now??
    if (
      !user.firstname ||
      !user.lastname ||
      !user.email ||
      !user.password1 ||
      !user.password2
    ) {
      //alert('Please fill out all form fields.');
      return false;
    }

    // make sure the passwords match match
    if (user.password1 !== user.password2) {
      //alert('Your passwords must match.');
      return false;
    }

    // Just so we can confirm that the bindings are working
    console.log(user);

    userservice.createUser(user);
  };

});
