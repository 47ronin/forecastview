'use strict';

/**
 * @ngdoc overview
 * @name forecastviewApp
 * @description
 * # forecastviewApp
 *
 * Main module of the application.
 */
angular
  .module('forecastviewApp', [
    'ngRoute',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
