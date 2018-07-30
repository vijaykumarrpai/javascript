// Any variable defined outside of a function, is a global variable in javascript.
var name = 'Vijay';

function sayHello() {
    return 'Hi ' + name;
}

console.log(sayHello());

function person() {
    // a variable defined inside a function, its availabilty is only within the function, these variables cannot be accessed outside the function.
    // In javascript variables are function scoped.
    var city = 'Bangalore';
    console.log(city);
}
person();
// console.log(city); // cannot access the city variable that has been defined inside the person function.

function movie() {
    // if variables are defined without the keyword var, they become a global variable and are available outside the function.
    actor = 'Keanu Reeves';
    console.log(actor);
}
movie();
console.log(actor);
console.log(name);