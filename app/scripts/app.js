'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
     .when('/ejemplobasico', {
        templateUrl: 'views/ejemplobasico.html',
        controller: 'EjemploBasicoCtrl'
      })    
     .when('/datos', {
        templateUrl: 'views/datos.html',
        controller: 'DatosCtrl'
      })    
     .when('/objetos', {
        templateUrl: 'views/objetos.html',
        controller: 'ObjetosCtrl'
      })    
     .when('/vistarepetida', {
        templateUrl: 'views/vistarepetida.html',
        controller: 'VistaRepetidaCtrl'
      })    
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });