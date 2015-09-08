'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserlistCtrl
 * @description
 * # UserlistCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserlistCtrl', function ($scope, $http, userservice) {
    var users;

    $scope.users = users = {};

    userservice.getUsers().then(function(data) {
      $scope.users = data;
    });

    $scope.remove = function(user) {
      userservice.deleteUser(user).then(function(data) {
        $scope.users = data;
      });
    };
  });
