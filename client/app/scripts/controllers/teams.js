'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TeamsCtrl', function ($scope,$http,teamservice) {
     var listgroupitems = [];
     var teams;
     $scope.teams = teams = {};

     teamservice.getTeams().then(function(data) {
         for(var d=0;d<data.length;d++){
           var listGroupItem = {};
           listGroupItem.label = data[d].teamname;
           listGroupItem.subheading = data[d].manager.firstname + ' ' + data[d].manager.lastname;
           listGroupItem.data = data[d];
           listgroupitems.push(listGroupItem);
         }
         $scope.listgroupitems = listgroupitems;
         $scope.selectedItem = listgroupitems[0];
     });

     $scope.itemSelection = function(team) {
       team.data.QB = {name:"Andrew Luck",team:"IND"};
       $scope.selectedItem = team;
       $scope.teams.selectedItem = team;
       console.log("selected a team:"+team.label);
     };
  });
