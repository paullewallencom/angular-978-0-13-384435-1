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
        continue;
    console.log("It's " + days[idx] "<br>");
}