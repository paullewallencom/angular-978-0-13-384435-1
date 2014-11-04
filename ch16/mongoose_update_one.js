var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function(){
    var query = Words.findOne().where('word', 'gratification');
    query.exec(function(err, doc){
        console.log("Before Update: ");
        console.log(doc.toString());
        var query = doc.update({$set:{word:'gratifacation',
            size:13, last:'s'},
            $push:{letters:'s'}});
        query.exec(function(err, results){
            console.log("\n%d Documents Updated", results);
            Words.findOne({word:'gratifications'}, function(err, doc){
                console.log("\nAfter Update: ");
                console.log(doc.toString());
                mongoose.disconnect();
            });
        });
    });
});