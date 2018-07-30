//An array is an ordered, integer indexed, collection of values.
var player1 = 'dhoni';
var player2 = 'sachin';
var player3 = 'virat';
var player4 = 'rahul';

//object
var player = {

}

//array
var players = [];

console.log(players);
console.log(typeof players); //'object'
console.log(typeof player); //'object'
console.log(Array.isArray(players)); // true
console.log(Array.isArray(player)); // false

var dream11 = ['dhoni', 'sachin', 'virat', 'rahul', 'zaheer'];
console.log(dream11);

console.log(dream11[0]); // 'dhoni'
console.log(dream11[1]); //'sachin'
console.log(dream11[2].toUpperCase()); // 'VIRAT'

console.log(dream11[10]); //undefined
console.log(dream11);
dream11[4] = 'kumble';
console.log(dream11);

console.log(dream11.push('sehwag'));
console.log(dream11);

// last index will always be length - 1

console.log('total players : ', dream11.length);

dream11[dream11.length] = 'dhawan';
console.log(dream11);

var numbers = [10,20,30];
console.log(numbers.reverse());
console.log(numbers.sort());

console.log(dream11);

var names = new Array(); // names = []
console.log(names);

var names = new Array(2);
console.log(names);
console.log(names[0]); //undefined - Sparsh array
console.log(names[1]); //undefined

var names = new Array(2, 'anonymous'); // [2, 'anonymous']
console.log(names);

var numbers = new Array(10);
console.log(numbers);
numbers.fill(10);
console.log(numbers);

console.log(dream11);
//pop used to remove the element from the end of the array
console.log(dream11.pop()); //'virat'
console.log(dream11);
//push used to add an element to the end of the array
console.log(dream11.push('rohit')); //7
console.log(dream11);
// shift is used to remove the element from the beginning of the array
console.log(dream11.shift()); //'dhoni'
console.log(dream11);
//unshift is used to add an element to the beginning of the array
console.log(dream11.unshift('raina')); //7
console.log(dream11);
// splice is used to add / remove an element from a certain index
// splice with 4 arguments used to add
dream11.splice(1,0,'virat');
console.log(dream11);

dream11.splice(3,2);
console.log(dream11);