var students = ['ravi', 'rakesh', 'pavan', 'pavan'];
function findTimes(students,search) {
    var result = students.filter(function(student) {
        return student === search;
    });
    if(result.length === 0) {
        return `${search} is not in the list`;    
    } else {
    return `${search} appears ${result.length} times`;
    }
}
console.log(findTimes(students,'pavan'));
console.log(findTimes(students,'gokul'));