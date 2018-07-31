function factorial(a) {
    let fact = 1;
    for(let i = a; i > 1; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(4));
console.log(factorial(5));