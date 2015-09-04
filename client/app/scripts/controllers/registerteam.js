'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterteamCtrl
 * @description
 * # RegisterteamCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterteamCtrl', function ($scope, $http, $timeout) {
    var users,team,register;

    $scope.register = register = {};
    $scope.register.users = users = {};
    $scope.register.team = team = {};

    var request = $http.get('/userlist');

    // we'll come back to here and fill in more when ready
    request.success(function (data) {
        console.log("Returned from server:"+data);
        $scope.register.users = data;
    });

    request.error(function (data) {
        console.log(data); // <-- changed
    });

    register.submit = function() {
      register.team.manager = register.selectedManager;
      var request = $http.post('/teams/registerTeam', register.team);

      // we'll come back to here and fill in more when ready
      request.success(function (data) {
        $scope.register.success = true;
        $timeout(function () { $scope.register.success = false; }, 3000);
        register.reset();
        console.log(data);
      });

      request.error(function (data) {
          console.log(data); // <-- changed
      });
    };

    $scope.register.reset = function() {
      $scope.register.team = {};
      $scope.register.selectedManager = {};
    };
  });
