// declarative programming
var numbers = [10,15,20,25,30,35];
var results = numbers.filter(function(n) {
    return n % 2 === 0;
});
console.log(results);

var greater25 = numbers.filter(function(n) {
    return n > 25;
});
console.log(greater25);

var greater250 = numbers.filter(function(n) {
    return n > 250;
});
console.log(greater250);

// node JS / React JS -> arrow function
var evens = numbers.filter(n => n % 2 === 0);
console.log(evens);