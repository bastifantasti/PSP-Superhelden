'use strict';

/**
 * @ngdoc service
 * @name testPspApp.myHero
 * @description
 * # myHero
 * Service in the testPspApp.
 */
angular.module('testPspApp')
  .service('myHero', function myHero($http, $q) {
        var baseUrl = 'http://gateway.marvel.com:80/';
        var publickey = '5778aca0ad21b033c08fb87f2716bda1';
        var privatekey = '94c7ba04e4300fd9e4d8771e07d7fd94698908e4';

        var getHeroByName = function (name) {
                var deferred = $q.defer();
                var url = baseUrl + 'v1/public/characters?name=' + name + '&apikey=' + publickey;
                $http.get(url).success(deferred.resolve).error(deferred.reject);
                return deferred.promise;

        };

        return {
            getHeroByName: getHeroByName,
        };

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
