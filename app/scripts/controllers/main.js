'use strict';

/**
 * @ngdoc function
 * @name iceCreamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iceCreamApp
 */
angular.module('iceCreamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
