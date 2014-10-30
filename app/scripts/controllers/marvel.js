'use strict';

/**
 * @ngdoc function
 * @name testPspApp.controller:MarvelCtrl
 * @description
 * # MarvelCtrl
 * Controller of the testPspApp
 */
angular.module('testPspApp')
    .controller('MarvelCtrl', function ($scope, myHero) {
        $scope.hero = {'name': '', 'description': '', 'image': '', 'comics': '', 'series': '', 'events': ''};

        $scope.search = function () {
            myHero.getHeroByName($scope.superhero).then(function (messages) {
                var data = messages.data.results[0];
                if (angular.isUndefined(data)) {
                    $scope.hero.name = $scope.superhero + ':'
                    $scope.hero.description = '"Sorry, im no Superhero from Marvel."';

                    $scope.hero.image = 'images/yeoman.png';
                } else {
                    $scope.hero.name = data.name;
                    $scope.hero.description = data.description;
                    $scope.hero.image = data.thumbnail.path + '.' + data.thumbnail.extension;
                    $scope.hero.comics = data.comics;
                    $scope.hero.series = data.series;
                    $scope.hero.events = data.events;
                }
            }, function (error) {
                console.log('ERROR');
                console.log(error);
            });
        };


    });
