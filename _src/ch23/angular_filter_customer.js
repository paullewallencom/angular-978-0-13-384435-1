angular.module('myApp', []).
filter('censor', function(){
    returm function(input, replacement){
        var cWords = ['bad', 'evil', 'dark'];
        var out = input;
        for(var i=0; i<cWords.length; i++){
            out = out.replace(cWords[i], replacement);
        }
        return out;
    };
}).
controller('myController', ['$scope', 'censorFilter',
    function()])