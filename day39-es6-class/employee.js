class Employee {
    constructor(firstName, lastName, salary = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    details() {
        return `${this.firstName} ${this.lastName} yearly salary is : ${this.salary}`;
    }

    increment() {
        return `${this.firstName} ${this.lastName} yearly salary after increment is : ${this.salary + (this.salary * .10)}`
    }
}

let e1 = new Employee('Ravi', 'Kumar', 800000);
console.log(e1.details());
console.log(e1.increment());
let e2 = new Employee('Avinash', 'Sachdev', 1000000);
console.log(e2.details());
console.log(e2.increment());