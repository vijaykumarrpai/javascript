// function declaration
function add(n1,n2) {
    return n1 + n2;
}
console.log(add(10,20));

// function expression
var sum = function(n1,n2) {
    return n1 + n2;
}

console.log(sum);
console.log(sum(10,20));

var array = [10,20,30,40,50];
var findTotal = function(value) {
    sum = 0;
    for(i = 0; i < array.length; i++) {
        sum = sum + value[i];
    }
    return sum;
}

console.log(findTotal(array));