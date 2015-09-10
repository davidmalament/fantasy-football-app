'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayersCtrl', function ($scope,playerservice,myteamservice) {
    $scope.players = {};

    playerservice.getPlayers().then(function(data) {
      $scope.myteam = myteamservice.getCurrentTeam();
      $scope.players = data;
    });

    $scope.playerAction = function(player) {
      //add
      if(player.leagueteam===undefined){
        console.log("add");
      }
      //trade
      else if($scope.myteam !== player.leagueteam){
        console.log("trade");
      }
      //drop
      else if($scope.myteam === player.leaguteam){
        console.log("drop");
      }
    };
  });
