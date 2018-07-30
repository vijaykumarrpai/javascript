// Whenever we pass a primitive datatype (number,string,undefined,boolean,null) as an argument to the function, the function always makes copy of the data.

var number = 10;
var name = 'Vijay';
var isTrue = true;

function setNumber(number) {
    number = 100;
    console.log(number);
}

function setName(name) {
    name = 'Vijaykumar';
    console.log(name);
}

function setBoolean(isTrue) {
    isTrue = false;
    console.log(isTrue);
}

setNumber(number);
console.log(number);

setName(name);
console.log(name);

setBoolean(isTrue);
console.log(isTrue);
