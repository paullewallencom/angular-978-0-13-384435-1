var days = [
        "Monday"
      , "Tuesday"
      , "Wednesday"
      , "Thursday"
      , "Friday"
      , "Saturday"
      , "Sunday"
];
var i = 0;
do{
    var day = days[ i++ ];
    console.log( "It's " + day );
} while ( day != "Wednesday" );