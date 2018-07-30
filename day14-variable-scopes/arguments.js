var n1 = 10;
var n2 = 20;

function someFunction(n1,n2) {
    console.log(n1);
    console.log(n2);
    console.log(arguments);
    console.log(typeof arguments);
    console.log(Object.keys(arguments));
    console.log(Object.values(arguments));
    console.log(arguments['0']);
    console.log(arguments.length);
    console.log(Array.isArray(arguments)); //regular object
}

someFunction(n1,n2,'a','b');