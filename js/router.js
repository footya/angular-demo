angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'RouteListCtl'
            })
            .when('/list/:id', {
                templateUrl: 'views/item.html',
                controller: 'RouteDetailCtl'
            })
            .otherwise({
                redirectTo: '/list'
            });
    })
    .controller('Ctrl', function($scope) {
        $scope.list = [1, 2, 3]
    })
    .controller('RouteDetailCtl', function($scope, $routeParams) {
        $scope.id = $routeParams.id;
    });