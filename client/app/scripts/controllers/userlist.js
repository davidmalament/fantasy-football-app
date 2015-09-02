'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserlistCtrl
 * @description
 * # UserlistCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserlistCtrl', function ($scope, $http) {
    var users;

    $scope.users = users = {};

    var request = $http.get('/userlist');

    // we'll come back to here and fill in more when ready
    request.success(function (data) {
        $scope.users = data;
    });

    request.error(function (data) {
        console.log(data); // <-- changed
    });

    $scope.remove = function(user) {
      $http.delete('/userlist/deleteUser/' + user.email)
            .success(function(data) {
                $scope.users = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
  });
