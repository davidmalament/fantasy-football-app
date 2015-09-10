'use strict';

/**
 * @ngdoc service
 * @name clientApp.teamservice
 * @description
 * # teamservice
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('teamservice', function ($q,$http) {

    function getTeams () {
      var def = $q.defer();

      if(service.teams && service.teams.length > 0){
        def.resolve(service.teams);
        return def.promise;
      }
      else{
        $http.get('/teams')
        .success(function(data) {
          service.teams = data;
          def.resolve(data);
        })
        .error(function(data){
          console.log(data);
          def.reject("Failed to get teams");
        });
        return def.promise;
      }
    }

    function registerTeam(team){
      var def = $q.defer();

      $http.post('/teams/registerTeam', team)
      .success(function(data){
        def.resolve(data);
      })
      .error(function(data){
        console.log(data);
        def.reject("Failed to register team.");
      });
      return def.promise;
    }

    //define the interface
    var service = {
      teams: {},
      getTeams: getTeams,
      registerTeam: registerTeam
    };

    return service;
  });
