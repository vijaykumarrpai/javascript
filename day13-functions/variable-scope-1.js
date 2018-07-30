var n1 = 10;
var n2 = 20;

function add1() {
    //here we are directly able to assign new values to our global variables.
    n1 = 100;
    n2 = 200;
    return n1 + n2;
}

console.log(add1());
console.log(n1);
console.log(n2);

var a1 = 15;
var a2 = 25;
function sum() {
    var a1 = 150;
    var a2 = 250;
    return a1 + a2;
}

console.log(sum());
console.log(a1);
console.log(a2);

var a1 = 15;
var a2 = 25;
function add() {
    var a1 = 150;
    var a2 = 250;
    a1 = 1500;
    a2 = 2500;
    return a1 + a2;
}

console.log(add());
console.log(a1);
console.log(a2);