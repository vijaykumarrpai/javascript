// Whenever we pass an argument of object type ie (array, object, date) to the function, it will always refer to the variables defined in the global scope.

var numbers = [10];

var person = {
    name: 'vijay'
}

function changeNumber(numbers) {
    numbers[0] = 100;
    console.log('inside function',numbers);
}

function changePerson(tutor) {
    tutor.name = 'Aniruddha';
    console.log('inside function', tutor);
}

console.log('Before calling function', numbers);
changeNumber(numbers);
console.log('After calling & outside function', numbers);

console.log('Before calling function', person);
changePerson(person);
console.log('After calling & outside function', person);
