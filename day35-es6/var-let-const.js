// <= 2014

function countVowels(str) {
    const Vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(Vowels.includes(str[i])) {
            count ++;
        }
    }
    return count;
}

console.log(countVowels('vijaykumarrpai'));

// var pi = Math.PI;
// console.log(pi);
// pi = Math.PI * 2; // var allows us to reassign
// console.log(pi);

const pi = Math.PI;
console.log(pi);
// pi = Math.PI * 2; // TypeError : Assignment to constant variable.
// console.log(pi);

let speed = 62;
console.log(speed);
speed++;
console.log(speed);