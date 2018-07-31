var fruits = ['apple','mango','banana','strawberry'];

// es5
fruits.forEach(function(fruit){
    console.log(fruit);
});

// es6
fruits.forEach((fruit) => {
    console.log(fruit);
});

// incase of only one arg to the function eliminate round brackets
fruits.forEach(fruit => {
    console.log(fruit);
});

// incase of only one statement to be executed inside the function, eliminate the flower brackets

fruits.forEach(fruit => console.log(fruit));

   let numbers = [10,20,30,40,50];
// let result = numbers.filter(function(n){     // es5
//     return n > 25;
// });

let result = numbers.filter(n => n > 25);
console.log(result);


// arrow functions will ALWAYS be anonymous function, hence we use function expression

// function declaration cannot be used as arrow functions
function add() {

}

// function expressions can be converted to arrow functions
var add = () => {

}