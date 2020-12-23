var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();
var auth = basicAuth(function(user, pass){
    return(user === 'user' && pass === 'test');
});

app.get('/library', function(req, res){
    res.send('Welcome to the library.');
});

appget('/restricted', auth, function(req, res){
    res.send('Welcometo the restricted section.');
});
app.listen(80);