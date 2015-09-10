'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MyteamCtrl
 * @description
 * # MyteamCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MyteamCtrl', function ($scope, teamservice, myteamservice) {
    var teams,selectedTeam;

    $scope.teams = teams = {};
    $scope.selectedTeam = selectedTeam = {};

    teamservice.getTeams().then(function(data) {
      $scope.teams = data;
      $scope.selectedTeam = myteamservice.getCurrentTeam();

      if(Object.keys($scope.selectedTeam).length===0){
        $scope.selectedTeam=data[0];
        myteamservice.changeTeam(data[0]);
      }
    });

    $scope.changeTeam = function(team){
      $scope.selectedTeam = team;
      myteamservice.changeTeam(team);
      console.log("Change team to "+team.teamname);
    };

  });
