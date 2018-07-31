const {Customer} = require('./customer.js');

let c1 = new Customer('rakesh', 'SBI123', 500);
console.log(c1.checkBalance());
console.log(c1.transaction(1,500));
console.log(c1.checkBalance());
console.log(c1.transaction(0,5000));