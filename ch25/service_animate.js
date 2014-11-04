var app = angular.module('myApp', ['ngAnimate']);

app.controller('myController', function($scope){
    $scope.myImgClass = 'start-class';
});

app.animation('.fadeOut', function() {
    return {
        enter: function(element, parentElement, afterElement, doneCallBack) {},
        leave: function(element, doneCallBack) {},
        move: function(element, parentElement, afterElement, doneCallBack) {},
        addClass: function(element, className, done) {
            jQuery(element).animate({ opacity: 0 }, 3000);
        },
        removeClass : function(element, className, done) {
            jQuery(element).animate({opacity:1}, 3000);
        }
    };
});