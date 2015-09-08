'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterteamCtrl
 * @description
 * # RegisterteamCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterteamCtrl', function ($scope, $timeout, userservice, teamservice) {
    var users,team,register;

    $scope.register = register = {};
    $scope.register.users = users = {};
    $scope.register.team = team = {};

    userservice.getUsers().then(function(data) {
      $scope.register.users = data;
    });

    register.submit = function() {
      register.team.manager = register.selectedManager;
      teamservice.registerTeam(register.team).then(function(data) {
        $scope.register.success = true;
        $timeout(function () { $scope.register.success = false; }, 3000);
        register.reset();
        console.log(data);
      });
    };

    $scope.register.reset = function() {
      $scope.register.team = {};
      $scope.register.selectedManager = {};
    };
  });
