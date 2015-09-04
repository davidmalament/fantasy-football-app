'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TeamsCtrl', function ($scope,$http) {
     var listgroupitems = [];
     var teams;
     $scope.teams = teams = {};

     var request = $http.get('/teams');

     // we'll come back to here and fill in more when ready
     request.success(function (data) {
         console.log("Returned from server:"+data[0].teamname);

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

     request.error(function (data) {
         console.log(data); // <-- changed
     });
     //listgroupitems = [{label:'Test1',selected:true},{label:'Test2',selected:false}];

     //$scope.listgroupitems = listgroupitems;

     $scope.itemSelection = function(team) {
       team.data.starters.push({name:"Andrew Luck",team:"IND"});
       $scope.selectedItem = team;
       $scope.teams.selectedItem = team;
       console.log("selected a team:"+team.label);
       console.log($scope.selectedItem.data.starters);
     };
  });
