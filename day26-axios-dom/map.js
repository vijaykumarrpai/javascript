var name = 'rakesh';
var skills = ['js','rb','py'];
var result = [];
skills.forEach(function(skill){
    result.push(`${name} knows ${skill}`);
});

console.log(result);

var output = skills.map(function(skill){
    return `${name} knows ${skill}`;
});

console.log(output);