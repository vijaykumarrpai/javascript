// Javascript does JIT - Just In Time compilation
// This is to demonstrate that we can directly pass values as arguments to a function call
function greeting(name) { // name = parameter, parameters are also local variables that can be used within the function.
    return 'Hi ' + name;
}
console.log(greeting('Vijay')); // 'Ani' = argument

// This is to demostrate that we can pass a variable as an argument to the function call, and also we can have different names for our parameter and our argument
function sayHi(firstName) {
    return 'Hi ' + firstName;
}
var name = 'Kumar';
console.log(sayHi(name));

// This is to demonstrate that we can pass a variable as an argument to the function call, and also we can have the same names for our parameter and our argument
function sayHello(name) {
    return 'Hello ' + name;
}

var name = 'Vijay';
console.log(sayHello(name));