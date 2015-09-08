'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayersCtrl', function ($scope,playerservice) {
    $scope.players = {};

    playerservice.getPlayers().then(function(data) {
      $scope.players = data;
    });
  });
