'use strict';

angular
  .module('LeaderboardApp', ['ngResource','ngRoute', 'ngAnimate'])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-ZUMO-APPLICATION'] = 'csjbIiRpveDWDvLeuZjbDVIciYpPsn24';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
