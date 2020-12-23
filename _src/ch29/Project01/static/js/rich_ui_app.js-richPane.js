// 001
var app = angular.module('richApp', []);

// 078
app.directive('richTabs', function() {
    return {restrict: 'E', transclude: true,
        scope: {},
        controller: function($scope) {
            var panes = $scope.panes = [];
            $scope.select = function(pane) {
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };
            this.addPane = function(pane) {
                if (panes.length == 0) {
                    $scope.select(pane);
                }
                panes.push(pane);
            };
        },
        templateUrl: '/static/rich_tabs.html'
    };
});

app.directive('richPane', function() {
    return {require: '^richTabs', restrict: 'E',
        templateUrl: '/static/rich_pane.html',
        transclude: true, scope: {title: '@' },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        }
    };
});