var str = 'js rb py';
console.log(str.split(' '));

var names = ['ramesh', 'ganesh', 'suresh', 'ganesh'];
console.log(names.join(', '));

var numbers = [1,2,3,4,5,6,7,8,9,0];
var a = numbers.slice(0,3);
console.log(a.join(''));
var b = numbers.slice(3,6);
console.log(b.join(''));
var c = numbers.slice(6,10);
console.log(c.join(''));

console.log(`(${a.join('')})` + `${b.join('')}-` + `${c.join('')}`);

var odds = [15,25];
var evens = [10,20];
var numbers = evens.concat(odds);
console.log(numbers);

console.log(names.indexOf('ganesh'));
console.log(names.indexOf('ani'));

console.log(names.lastIndexOf('ganesh'));

var names = ['ramesh', 'ganesh', 'suresh', 'ganesh'];

if(names.indexOf('ganesh') === names.lastIndexOf('ganesh')) {
    console.log('unique');
} else {
    console.log('repeated');
}

if(names.indexOf('suresh') === names.lastIndexOf('suresh')) {
    console.log('unique');
} else {
    console.log('repeated');
}