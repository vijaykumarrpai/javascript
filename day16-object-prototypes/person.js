function Person(name,age) {
    this.name = name;
    this.age = age;
    this.description = function() {
        return `${this.name} is ${this.age}`;
    }
}

var person = new Person('Rakesh',25);
console.log(person.description());
// new property being assigned to obj person
person.education = 'BE Civil';
console.log(person.education);
person.skills = ['js','py','rb'];
person.fullDetails = function() {
    return `${this.name} knows ${this.skills}`;
}
console.log(person.fullDetails());

var singer = new Person('Linkin Park',42);
console.log(singer.name);
console.log(singer.description());
// console.log(singer.skills);
// console.log(singer.fullDetails());

var player = new Person('Virat', 30);


var student = new Person('Vijay', 22);
console.log(student.description());
// student obj doesn't have education property
console.log(student.education); // undefined
console.log(student.skills); // undefined
// console.log(student.fullDetails()); - function not defined