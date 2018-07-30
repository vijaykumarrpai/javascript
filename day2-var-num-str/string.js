var firstName = "Vijaykumar";
var city = 'Bangalore';
var state = 'KARNATAKA';
var password = 'secret123';

var sentence = 'Make in India. Make in Bangalore';

console.log(password.length); // 9 - length is a property
console.log(firstName.toUpperCase()); // 'Vijaykumar' - toUpperCase() is a method
console.log(state.toLowerCase());
console.log(sentence.indexOf('Make'));
console.log(sentence.indexOf('USA'));
console.log(firstName.search('kumar'));
console.log(sentence.lastIndexOf('Make'));
console.log(firstName.charAt(3));

console.log(sentence.includes('India'));

console.log('hi'.repeat(4));

//var b = console.log(state.slice(0,1));
//console.log(b.toLowerCase());

console.log(firstName.slice(0,3));
console.log(firstName.slice(1));
console.log(firstName.slice(3,6));
console.log(firstName.substr(3,6));
console.log(firstName.substring(3,6));
var res = firstName.replace("Vijaykumar", "Rajkumar");
console.log(res);
console.log(firstName.replace("Vijaykumar", "Rajkumar"));

var food = 'Chicken fried rice, Chicken noodles';
console.log(food.split(" "));

var phoneNumber = '1234567890';
var a = (phoneNumber.slice(0,3));
var b = (phoneNumber.slice(3,6));
var c = (phoneNumber.slice(6,10));
console.log(`(${a})` + `${b}-` + `${c}`);

