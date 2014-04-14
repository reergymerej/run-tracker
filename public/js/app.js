'use strict';

// Set up the application
var app = angular.module('run-tracker', []);

// controllers ================================================
app.controller('NavCtrl', ['$scope', function ($scope) {
    $scope.foo = 'Hello';

    $scope.pages = [
        {
            href: '/',
            name: 'home'
        },
        {
            href: '/add',
            name: 'add a run'
        },
        {
            href: '/view',
            name: 'view runs'
        }
    ];
}]);


angular.bootstrap(document, ['run-tracker']);