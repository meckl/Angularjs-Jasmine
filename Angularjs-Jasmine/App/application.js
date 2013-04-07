'use strict';

angular.module("myApp", ["Application.Controllers", "ngResource"]).
config(['$routeProvider', function ($routeProvide) {

    $routeProvide.
        when("/", { controller: "MainCtrl", templateUrl: "Partials/Main.html" }).
        otherwise({ redirectTo: "/" });

}])