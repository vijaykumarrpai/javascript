let fruits = ['apple', 'mango', 'jackfruit', 'banana', 'watermelon', 'guava'];

// es5
let f1 = fruits[0];

let f2 = [];

f2 = fruits.slice(1);
console.log(f1);
console.log(f2);

// es6

let [fruit1, fruit2, ...allOtherRemainingFruits] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(allOtherRemainingFruits);
console.log(Array.isArray(allOtherRemainingFruits));

// skipped a value from fruits at the 1st index
let [fru1, ,...otherFruits] = fruits;
console.log(fru1);
console.log(otherFruits);