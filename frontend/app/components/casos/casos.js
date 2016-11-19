'use strict';

angular.module('myApp.casos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/casos', {
    templateUrl: 'components/casos/casos.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/data.json')
    .then(function(res){
      $scope.datos = res.data;
    });
}]);
