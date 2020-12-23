// 001
var app = angular.module('richApp', []);
...
// 050
app.controller('weatherController', function($scope, $http) {
    $scope.cities = ['London', 'Paris', 'New York', 'Rome', 'Los Angeles'];
    $scope.location = $scope.cities[0];
    $scope.locationIn = '';
    $scope.getWeather = function() {
        $http({url: 'weather', method: "GET",
            params:{city:$scope.location}})
        .success(function(data, status, headers, config) {
            $scope.weather = data;
        })
        .error(function(data, status, headers, config) {
            $scope.weather = data;
        });
    };
    $scope.addCity = function() {
        if ($scope.cities.indexOf($scope.locationIn) != 0) {
            $scope.cities.push($scope.locationIn);
        }
        $scope.location = $scope.locationIn;
        $scope.getWeather();
    };
    $scope.setLocation = function(city) {
        $scope.location = city;
        $scope.getWeather();
    };
    $scope.getWeather('London');
});