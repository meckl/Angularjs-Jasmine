describe('MainCtrl controller', function () {

    var scope, mainCtrl;

    beforeEach(module("Application.Controllers"));
    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        mainCtrl = $controller("MainCtrl", { $scope: scope });


    }));

    it("Should have HelloWorld message", function () {

        expect(scope.viewModel.message).toBe("HelloWorld");
    }
    );

});