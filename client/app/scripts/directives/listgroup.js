'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:listgroup
 * @description
 * # listgroup
 */
angular.module('clientApp')
  .directive('listgroup', function () {
    return {
      template: '<div class="list-group"><a href="" ng-class="{\'list-group-item active\':selectedItem===item, \'list-group-item\':selectedItem!=item}" ng-click="itemSelection(item)" ng-repeat="item in listgroupitems"><h5>{{item.label}}&nbsp&nbsp&nbsp<small>{{item.subheading}}</small></h5></a></div>',
      restrict: 'E'
      //link: function postLink(scope, element, attrs) {
        //element.text('this is the listgroup directive');
      //}
    };
  });
