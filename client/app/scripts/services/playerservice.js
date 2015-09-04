'use strict';

/**
 * @ngdoc service
 * @name clientApp.playerservice
 * @description
 * # playerservice
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('playerservice', function ($http, $q) {
    //implementation
    function getPlayers () {
      var def = $q.defer();

      if(service.players && service.players.length > 0){
        def.resolve(service.players);
        return def.promise;
      }
      else{
        $http.get('/players')
        .success(function(data) {
          service.players = data;
          def.resolve(data);
        })
        .error(function(data){
          console.log(data);
          def.reject("Failed to get players");
        });
        return def.promise;
      }
    }

    //define the interface
    var service = {
      players: {},
      getPlayers: getPlayers
    };

    return service;
  });
