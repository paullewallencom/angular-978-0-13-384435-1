var days = [
    "Monday"
  , "Tuesday"
  , "Wednesday"
  , "Thursday"
  , "Friday"
  , "Saturday"
  , "Sunday"
];

for (var idx in days) {
    if (days[idx] == "Wednesday")
        break;
    console.log("It's " + days[idx] "<br>");
}