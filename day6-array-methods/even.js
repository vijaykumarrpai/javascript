var numbers = [10,15,20,25,30,35];
function findEvensCount(numbers) {
    var count = 0;
    for(var i = 0; i < numbers.length; i++) {
        if((numbers[i]) % 2 === 0)
        {
            count++;
        }
    }
    return count;
}

console.log(findEvensCount(numbers));

function findEvens(numbers) {
    var evens = [];
    for(var  i = 0; i < numbers.length; i++) {
        if((numbers[i]) % 2 === 0){
            evens.push(numbers[i]);
        }
    }    
    return evens;
}

console.log(findEvens(numbers));

function isElePresent(numbers, element) {
    var isFound = false;
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] === element) {
            isFound = true;
        }
    }
    return isFound;
}

console.log(isElePresent(numbers,25));
console.log(isElePresent(numbers,50));