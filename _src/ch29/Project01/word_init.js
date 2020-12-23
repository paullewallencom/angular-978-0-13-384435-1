var vowelArr = "aeiou";
var consenantArr = "bcdfghjklmnpqrstvwxyz";
var words = "the,be,and,of,a,in ... ,middle-class, apology, till";
var wordArr = words.split(",");
var wordObjArr = new Array();

for (var i=0; i<wordArr.length; i++) {
    try{
        var word = wordArr[i].toLowerCase();
        var vowelCnt = ("|" + word + "|").split(/[aeiou]/i).length-1;
        var consonantCnt = 
          ("|"+word+"|").split(/[bcdfghjklmnpqrstvwxyz]/i).length-1;
          var letters = [];
          var vowels = [];
          var consonants = [];
          var other = [];

          for (var j=0; j<word.length; j++) {
            var ch = word[j];
            if (letters.indexOf(ch) === -1) {
                letters.push(ch);
            }
            if (vowelArr.indexOf(ch) !== -1) {
                if (vowels.indexOf(ch) === -1) {
                    vowels.push(ch);
                }
            } else if (consenantArr.indexOf(ch) !== -1) {
                if (consonants.indexOf(ch) === -1) {
                    consonants.push(ch);
                }
            } else {
                if (other.indexOf(ch) === -1) {
                    other.push(ch);
                }
            }
        }
        var charsets = [];
        if (consonants.length) {
            charsets.push({type:"consonants", chars:consonants});
        }
        if (vowels.length) {
            charsets.push({type:"vowels", chars: vowels});
        }
        if (other.length) {
            charsets.push({type: "other", chars:other});
        }
        var wordObj = {
            word: word,
            first: word[0],
            last: word[word.length-1],
            size: word.length,
            letters: letters,
            stats: {vowels: vowelCnt, consonants: consonantCnt},
            charsets: charsets
        };
        if (other.length) {
            wordObj.otherChars = other;
        }
        wordObjArr.push(wordObj);
        } catch (e) {
            console.log(e);
            console.log(word);
        }
    }
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost/", function(err, db) {
        var myDB = db.db("words");
        myDB.dropCollection("words");
        myDB.createCollection("words", function(err, wordCollection) {
            wordCollection.insert(wordObjArr, function(err, result) {
                console.log(result);
                db.close();
            });
        });
    });