//console.log(require('./math.js'));

const math = require('./math.js');

console.log(math.add());
console.log(math.add(10,20));
console.log(math.sub());
console.log(math.sub(20,10));
console.log(math.city);

// via object destructuring
const {add, sub} = require('./math.js');
console.log(add(10,20));
console.log(sub(15,5));