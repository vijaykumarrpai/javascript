// forEach takes each element and is passed as argument to the particular function.
var names = ['ramesh' ,'suresh', 'rajesh'];

for(var i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names);
    console.log(names[i]);
}

names.forEach(function(name,index) {
    console.log(`${name} is found in ${index} index`);
})