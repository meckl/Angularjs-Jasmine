'use strict';
angular.module("Application.Controllers", []).
    controller("MainCtrl", ["$scope", function ($scope) {
        var viewModel = {};

        viewModel.message = "HelloWorld";

        $scope.viewModel = viewModel;

    }]);