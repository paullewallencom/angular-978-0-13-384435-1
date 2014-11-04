var myVar = 1;
function writeIt() {
    var myVar = 2;
    console.log("Variable = " + myVar);
    writeMore();
}
function writeMore() {
    console.log("Variable = " + myVar);
}
writeIt();