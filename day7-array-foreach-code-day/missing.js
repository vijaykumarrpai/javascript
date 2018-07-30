var numbers = [1,2,3,5];
function findMissing(numbers) {
    for(i = 0; i < numbers.length - 1; i++) {
        if(numbers[i + 1] - numbers[i] !== 1) {
            return numbers[i] + 1
        }
    }
}

console.log(findMissing(numbers))