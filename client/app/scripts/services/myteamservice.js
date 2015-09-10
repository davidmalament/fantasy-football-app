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
    function AddPlayerException(player,message){
      this.player = player;
      this.message = message;
    }

    function changeTeam(team){
      service.myteam = team;
    }

    function getCurrentTeam(){
      return service.myteam;
    }

    function addPlayer(player){
      if((service.myteam.starters.length + service.myteam.bench.length) < 13){
        if(service.myteam.bench.length < 7){
          service.myteam.bench.push(player);
        }
      }
      else {
        throw new AddPlayerException(player,"You do not have enough roster spots to add this player.");
      }
    }
    function dropPlayer(player){

    }
    function moveToBench(player){

    }
    function moveToStarter(player){

    }

    var service = {
      myteam: {},
      changeTeam: changeTeam,
      getCurrentTeam: getCurrentTeam,
      addPlayer: addPlayer,
      dropPlayer: dropPlayer,
      moveToBench: moveToBench,
      moveToStarter: moveToStarter
    };

    return service;
  });
