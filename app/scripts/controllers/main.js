'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'MainCtrl', 
    function ($scope) {
        var id="home";
    	activeMenu(id);
    }
);