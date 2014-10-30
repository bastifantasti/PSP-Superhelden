'use strict';

/**
 * @ngdoc function
 * @name testPspApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testPspApp
 */
angular.module('testPspApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
