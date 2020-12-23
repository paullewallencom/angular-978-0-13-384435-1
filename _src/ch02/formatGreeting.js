// Returning Values from Functions

function formatGreeting(name, city) {
    var retStr = "";
    retStr += "Hello " + name + "\n";
    retStr += "Welcome to " + city + "!";
    return retStr;
}

var greeting = formatGreeting("Brad", "Rome");
console.log(greeting);

// function myFunc(value) {
//     if (value == 0)
//         return value;
//     <CODE_TO_EXECUTE_IF_VALUE_NONZERO>
//     return value;
// }