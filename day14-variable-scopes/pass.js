var n1 = 10;
var names = ['dct'];

function changeValues(n1,names) {
    n1 = 100;
    names[0] = 'dct academy';
    return [n1,names];
}

console.log(n1);
console.log(names);
console.log(changeValues(n1,names));
console.log(n1);
console.log(names);