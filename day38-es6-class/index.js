const {Car} = require('./car.js');

let car1 = new Car('S8', '2018', 'Black', 'Audi', 'Petrol', 5);
console.log(car1.details());
console.log(car1.getPosition());
console.log(car1.move());
console.log(car1.move());
console.log(car1.getPosition());
console.log(car1.reverse());
console.log(car1.getPosition());
car1.reset();
console.log(car1.getPosition());

let car2 = new Car('X6' ,'2018','Black','BMW','Petrol', 5);
console.log(car2.details());
let car3 = new Car('Evoque', '2018', 'Silver', 'Range Rover', 'Petrol', 5);
console.log(car3.details());
// let car4 = new Car();
// console.log(car4.details());