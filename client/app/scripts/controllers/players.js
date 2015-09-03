'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayersCtrl', function ($scope,$http,playerservice) {
    $scope.players = {};

    playerservice.getPlayers().then(function(data) {
      $scope.players = data;
    });
    /*
    $scope.players = players = {};

    var request = $http.get('/players');

    // we'll come back to here and fill in more when ready
    request.success(function (data) {
        console.log(data);
        $scope.players = data;
    });

    request.error(function (data) {
        console.log(data); // <-- changed
    });*/
  });
