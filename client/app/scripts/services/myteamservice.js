'use strict';

/**
 * @ngdoc service
 * @name clientApp.myteamservice
 * @description
 * # myteamservice
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('myteamservice', function () {
    function changeTeam(team){
      service.myteam = team;
    }

    function getCurrentTeam(){
      return service.myteam;
    }

    var service = {
      myteam: {},
      changeTeam: changeTeam,
      getCurrentTeam: getCurrentTeam
    };

    return service;
  });
