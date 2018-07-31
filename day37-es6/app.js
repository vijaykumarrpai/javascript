const greet = require('./greet.js');

console.log(greet.hello());
console.log(greet.goodAfternoon());
console.log(greet.goodEvening());

const{hello,goodAfternoon,goodEvening,description} = require('./greet.js');
console.log(greet.hello());
console.log(greet.goodAfternoon());
console.log(greet.goodEvening());
console.log(description);

