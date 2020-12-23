// Using Anonymous Functions

function doCalc(num1, num2, calcFunction) {
    return calcFunction(num1, num2);
}

function addFunc(n1, n2) {
    return n1 + n2;
}
doCalc(5,10,addFunc);

console.log(doCalc(5,10,function(n1,n2) {return n1 + n2; }) );
console.log(doCalc(5,10,function(n1,n2) {return n1 * n2; }) );