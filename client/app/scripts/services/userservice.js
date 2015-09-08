'use strict';

/**
 * @ngdoc service
 * @name clientApp.userservice
 * @description
 * # userservice
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('userservice', function ($http, $q) {
    //implementate
    function getUsers () {
      var def = $q.defer();

      if(service.users && service.users.length > 0){
        def.resolve(service.users);
        return def.promise;
      }
      else{
        $http.get('/userlist')
        .success(function(data) {
          service.users = data;
          def.resolve(data);
        })
        .error(function(data){
          console.log(data);
          def.reject("Failed to get users");
        });
        return def.promise;
      }
    }

    function deleteUser(user){
      var def = $q.defer();

      $http.delete('/userlist/deleteUser/' + user.email)
            .success(function(data) {
                service.users = data;
                def.resolve(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
                def.reject("Failed to delete user.");
            });

      return def.promise;
    }

    function createUser(user){
      var def = $q.defer();

      $http.post('/signup', user)
      .success(function (data) {
          service.users = data;
          def.resolve(data);
      })
      .error(function (data) {
          console.log('Error: '+data); // <-- changed
          def.reject("Failed to create user.");
      });

      return def.promise;
    }
    //define the interface
    var service = {
      users: {},
      getUsers: getUsers,
      deleteUser: deleteUser,
      createUser: createUser
    };

    return service;
  });
