function firstElements(a,b) {
    let arr = [];
    if(b === undefined) {
        return a[0];
    }
    arr = a.slice(0,Math.abs(b));
    return arr;
}

console.log(firstElements([7, 9, 0, -2]));
console.log(firstElements([],3));
console.log(firstElements([7, 9, 0, -2],3));
console.log(firstElements([7, 9, 0, -2],6));
console.log(firstElements([7, 9, 0, -2],-3));