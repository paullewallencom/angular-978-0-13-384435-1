STATEMENT                   VALUE OF X              VALUE OF ARR
var arr = [1,2,3,4,5];      undefined               1,2,3,4,5
var x = 0;                  0                       1,2,3,4,5
x = arr.unshift("zero");    6 (length)              zero,1,2,3,4,5
x = arr.push(6,7,8);        9 (length)              zero,1,2,3,4,5,6,7,8
x = arr.shift();            zero                    1,2,3,4,5,6,7,8
x = arr.pop();              8                       1,2,3,4,5,6,7
x = arr.splice(3,3,"four",  4,5,6                   1,2,3,four,five,six,7
    "five","six");
x = arr.splice(3,1);        four                    1,2,3,five,six,7
x = arr.splice(3);          five,six,7              1,2,3