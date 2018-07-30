var student = {
    name: 'Vijay',
    city: 'Bangalore',
    education: 'MCA',
    college: 'PES',

    sayName: function() { //when a property holds a function as it's value, that property is known as a method.
        return `My name is ${this.name}`;
    },
    whichCity: function() {
        return `I'm from ${this.city}`;    
    },
    myEducation: function() {
        return `My education is ${this.education}`;
    },
    myCollege: function() {
        return `I studied from ${this.college}`;
    }
}

console.log(student.sayName());
console.log(student.whichCity());
console.log(student.myEducation());
console.log(student.myCollege());