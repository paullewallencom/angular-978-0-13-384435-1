// 001
var app = angular.module('richApp', []);
...
//  108
app.directive('richDraggable', function($document, $window) {
    return function(scope, element, attr) {
        var startX = 0, startY = 0;
        var x = Math.floor((Math.random()*500)+40);
        var y = Math.floor((Math.random()*360)+40);
        element.css({
            position: 'absolute',
            cursor: 'pointer',
            top: y + 'px',
            left: x + 'px'
        });
        element.on('mousedown', function(event) {
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });
        function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }
        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    };
});