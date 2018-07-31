// function declaration
function sum() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments);
}
sum(10,20);

// function expression
let add = function() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments);
}
add(10,20);

// es6
let total = (n1,n2) => {
    // arguments object refers to the arguments for the main function and not the total or the called function
    //console.log(arguments);
    console.log(n1,n2); 
}
total(10,20);