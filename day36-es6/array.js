// array destructuring

// es5
let fruits = ['mango', 'jackfruit', 'watermelon', 'strawberry'];

let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit1,fruit2,fruit3);

// es6
[f1, f2, f3] = fruits;
console.log(f1, f2, f3);


// use case - where a function is returning an array, we want to take elements from the returned value and assign it to separate variables

function oddEven(numbers) {
    let result = [[], []];
    numbers.forEach(function(number){
        if(number % 2 === 0) {
            result[0].push(number);
        } else {
            result[1].push(number);
        }
    });
    return result;
}

function findSum(numbers) {
    return numbers.reduce(function(res,num){
        return res += num;
    });
}

// let result = oddEven([10,15,20,25]); // [[10,20], [15,25]]
// let evens = result[0];
// console.log('sum of evens is ', findSum(evens));

// let odds = result[1];
// console.log('sum of odds is', findSum(odds));

let [evens, odds] = oddEven([10,15,20,25]);
console.log(evens);
console.log('sum of evens is', findSum(evens));

console.log(odds);
console.log('sum of odds is', findSum(odds));