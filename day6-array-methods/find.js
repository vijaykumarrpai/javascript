var names = ['ramesh' ,'suresh', 'veeresh', 'ganesh'];

var present = names.find(function(name) {
    return name === 'ramesh';
});

console.log(present);

function findName(names,find) {
    var result = names.find(function(name) {
        return name === find;
    });
    return result;
}

console.log(findName(names,'suresh'));
console.log(findName(names,'jaggesh'));