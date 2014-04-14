'use strict';

// Set up the application
angular.module('run-tracker', [
    'ngRoute'
])

// routing ================================================
.config(['$routeProvider', 
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partial/home',
                controller: 'HomeCtrl'
            })
            .when('/add', {
                templateUrl: 'partial/add-run',
                controller: 'AddRunCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

// controllers ================================================
.controller('NavCtrl', ['$scope', function ($scope) {
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
}])

.controller('HomeCtrl', ['$scope', function ($scope) {

}])

.controller('AddRunCtrl', ['$scope', function ($scope) {
    $scope.foo = 'I am the AddRunCtrl.';
}]);


angular.bootstrap(document, ['run-tracker']);