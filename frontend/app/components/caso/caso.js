'use strict';

angular.module('myApp.caso', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/caso/:index', {
    templateUrl: 'components/caso/caso.html',
    controller: 'casoCtrl'
  });
}])

.controller('casoCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('data/data.json')
    .then(function(res){
      $scope.dato = res.data[$routeParams.index];
        });
}])
.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    };
});
