let person = {
    firstName: 'vijaykumar',
    lastName: 'pai',
    city: 'bangalore',
    skills: ['js', 'py', 'rb']
}
// es5

console.log(person.firstName);
console.log(person.lastName);

let fN = person.firstName;
let lN = person.lastName;
let c = person.city;

console.log(fN, lN, c);

// es6

let {firstName, lastName, city, skills} = person;
console.log(firstName, lastName, city, skills);