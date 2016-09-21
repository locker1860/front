var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('myd1', function(){
  return {
    restrict: "M",
    template: '<span ng-transclude >directive template1</span>',
    replace: true,
    transclude: true
  }
});

app.directive('myd2', function(){
  return {
  	restrict: "M",
    template: '<span ng-transclude >directive template2</span>',
    replace: false,
    transclude: true
  }
});