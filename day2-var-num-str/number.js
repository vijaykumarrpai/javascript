//primitive datatypes in js - number, string, boolean, undefined, null
//object datatypes - array, object, date - These have properties and methods defined
//In web development - DOM

var n1 = 10, n2 = 12.3, n3 = 13.7;
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

// Math Obj
console.log(Math.PI);
console.log(Math.round(n2));
console.log(Math.pow(2,3));
console.log(Math.sqrt(2,3));
console.log(Math.abs(-100));
console.log(Math.ceil(n2));
console.log(Math.floor(n3));
console.log(Math.min(n1,n2,n3));
console.log(Math.max(n1,n2,n3));
console.log(Math.random());

// Type Conversions

var x = 10, y = '15', z = '19.9', d = '16.6', e = 15;

console.log(typeof x);
console.log(Number(y) + x);
console.log(parseInt(z)+parseInt(y));

console.log(parseInt(d));
console.log(parseFloat(d));

console.log(String(x));
console.log(String(e));

// + operator

console.log(5 + 5);
console.log('Hello ' + 'world');
console.log(5 + '5');
console.log(5 + 5 + '5');
console.log(5 + '5' + 10);
console.log('5' + 10 + 15);
console.log('5' + (10 + 5));
console.log(5 * "a");

var x = 0.2 + 0.1
console.log(x);

var y = (0.2 * 10 + 0.1 * 10)/10
console.log(y);

//
var numbers = '10 20 30';
console.log(numbers.split(' '));
console.log(parseInt(numbers));
console.log(parseFloat(numbers));
console.log(Number(numbers));
console.log(Number.isNaN(numbers));


var numbers = [];
console.log(numbers.length); //length method
numbers.push(10);// push method
numbers.pop();//pop method