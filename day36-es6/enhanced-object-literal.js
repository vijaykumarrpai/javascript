// es5
let person = {
    firstName: 'vijaykumar',
    city: 'bangalore',
    details: function() {
        return `${this.firstName} lives in ${this.city}`;
    },
    greet: function(msg) {
        return `${this.firstName} says ${msg}`;
    }
}

console.log(person);
console.log(person.details());
console.log(person.greet('hello'));

//es6
let student = {
    firstName: 'ravi', 
    city: 'jaipur',
    details() {
        return `${this.firstName} lives in ${this.city}`;
    },
    greet(msg) {
        return `${this.firstName} says ${msg}`;
    }
}

console.log(student);
console.log(student.details());
console.log(student.greet('hello'));