var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  
  $scope.meta = [
    {
        sharepointName: 'swsharepoint',
        token: 'abcdef123456',
        alias: 'myalias',
        queryParamName: 'ast',
        abs: true
    }
]
  
}]);

