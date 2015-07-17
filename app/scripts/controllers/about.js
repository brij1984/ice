'use strict';

/**
 * @ngdoc function
 * @name iceCreamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iceCreamApp
 */
angular.module('iceCreamApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
