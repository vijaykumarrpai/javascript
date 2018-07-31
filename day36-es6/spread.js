console.log(Math.max(10,30));

let numbers = [15,25,5,45,55];
console.log(Math.max(numbers));
console.log(Math.max(15,25,5,45,55));

console.log(numbers);

// spread
console.log(... numbers);
console.log(Math.max(...numbers)); // ... -> gather operator
//console.log(Math.max(15,25,5,45,55));

// function someValues() {
//     console.log(arguments);
// }

// let values = ['city','name','dob','age'];
// someValues(...values);