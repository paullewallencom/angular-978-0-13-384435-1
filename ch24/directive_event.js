angular.module('myApp', []).
controller('myController', function($scope)){
    $scope.keyInfo = {};
    $scope.mouseInfo = {};
    $scope.keyStroke = function(event){
        $scope.keyInfo.keyCode = event.keyCode;
    };

    $scope.mouseClick = function(event){
        $scope.mouseInfo.clientX = event.client;
        $scope.mouseInfo.clientY = event.client;
        $scope.mouseInfo.screenX = event.screenX;
        $scope.mouseInfo.screenY = event.screenY;
    };
});