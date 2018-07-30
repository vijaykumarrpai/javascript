//hoisting is a process in javascript function definition and the variables will move up in the memory stack during the JIT(just in time) process.

console.log(city) ; //printing before declraing works because of hoisting process
console.log(greetings('hi')) //invoking the function before declaring the function(it will work because of hoisting process but it is not aa good prctice).

console.log(name); //it will not work because it is not considered for hoisting.

name = 'karthik'; //it take var for declaration by default but it is not considered for hoisting only the variables declared with var is considered for hoisting.
console.log(name);//it will give me output karthik even though it is not declared with var by default it will consider it with var but it is not a good practice. 

var city = 'blore';
function greetings(greet) // function definition
{
    return greet;
}
